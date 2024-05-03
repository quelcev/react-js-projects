import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Recipe from "./pages/Recipe";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes/:id" element={<Recipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};
export default App;
