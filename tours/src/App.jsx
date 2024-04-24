import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const toursApi = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const toursNew = tours.filter((tour) => tour.id !== id);
    setTours(toursNew);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(toursApi);
      const toursData = await response.json();
      setTours(toursData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="tours-section">
      {tours.length > 0 ? (
        <h2 className="title">Our Tours</h2>
      ) : (
        <>
          <h2 className="title">No Tours Left</h2>
          <button className="refresh-btn" onClick={fetchTours}>
            Refresh
          </button>
        </>
      )}
      <Tours tours={tours} removeTour={removeTour} />
    </section>
  );
};
export default App;
