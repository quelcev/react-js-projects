import { useContext, useEffect, useRef } from "react";
import heroImg from "../assets/hero-img.jpg";
import { FaBars } from "react-icons/fa6";
import AppContext from "../context";

const Home = () => {
  const {
    showLinks,
    setShowLinks,
    fixedNav,
    setFixedNav,
    homeRef,
    scrollToEl,
    navRef,
    linksRef,
    setShowBackTopBtn,
  } = useContext(AppContext);

  useEffect(() => {
    const throttle = (callback, limit) => {
      var wait = false; // Initially, we're not waiting
      return function () {
        // We return a throttled function
        if (!wait) {
          // If we're not waiting
          callback.call(); // Execute users function
          wait = true; // Prevent future invocations
          setTimeout(function () {
            // After a period of time
            wait = false; // And allow future invocations
          }, limit);
        }
      };
    };

    window.addEventListener(
      "scroll",
      throttle(() => {
        const top = document.documentElement.scrollTop;
        const navHeight = navRef.current.getBoundingClientRect().height;
        const homeBtm =
          homeRef.current.getBoundingClientRect().height - navHeight;
        if (top > navHeight) {
          setFixedNav(true);
        } else {
          setFixedNav(false);
        }
        if (top > homeBtm) {
          setShowBackTopBtn(true);
        } else {
          setShowBackTopBtn(false);
        }
      }, 100)
    );
  }, []);

  return (
    <section
      id="home"
      className="hero-container"
      style={{ backgroundImage: `url(${heroImg})` }}
      ref={homeRef}
    >
      <div className="hero-center">
        <nav className={fixedNav ? "nav sticky" : "nav"} ref={navRef}>
          <div className="nav-center">
            <div className="logo__nav-btn">
              <img
                src="https://img.freepik.com/premium-vector/label-banner-logo-template-black_760861-102.jpg?w=1380"
                alt="logo"
                className="logo"
              />
              <button
                className="nav-btn"
                onClick={() => setShowLinks(!showLinks)}
              >
                <FaBars />
              </button>
            </div>
            <ul
              className="links"
              style={{
                height: showLinks ? `${linksRef.current.scrollHeight}px` : 0,
              }}
              ref={linksRef}
            >
              <li>
                <a href="#home" className="scroll-link" onClick={scrollToEl}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="scroll-link" onClick={scrollToEl}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="scroll-link"
                  onClick={scrollToEl}
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="scroll-link" onClick={scrollToEl}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero-cta-container">
          <div className="hero-cta-inner">
            <h1>SCROLL</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a
              modi nostrum nobis nihil quis fuga repudiandae? Fugit nam id
              distinctio? Hic earum repudiandae autem ullam officiis nisi, nobis
              nemo?
            </p>
            <a href="#contact" className="scroll-link" onClick={scrollToEl}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
