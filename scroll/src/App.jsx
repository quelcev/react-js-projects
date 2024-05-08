import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import BackToTopBtn from "./components/BackToTopBtn";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import { scrollToRef } from "./utils";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const navRef = useRef(null);
  const [stickyNav, setStickyNav] = useState(false);
  const [showBackTopBtn, setShowBackTopBtn] = useState(false);
  const [linksHeight, setLinksHeight] = useState(0);

  const target = {
    "#home": homeRef,
    "#about": aboutRef,
    "#services": servicesRef,
    "#contact": contactRef,
  };

  const handleScrollTo = ({ e, href, backTop }) => {
    e.preventDefault();
    history.pushState(null, null, href);
    setLinksHeight(0);
    scrollToRef({ ref: target[href], navRef, stickyNav, linksHeight, backTop });
  };

  useEffect(() => {
    if (location.hash.length > 0) {
      scrollToRef({
        ref: target[location.hash],
        navRef,
        stickyNav,
        linksHeight,
      });
    }
  }, []);

  return (
    <>
      <Home
        homeRef={homeRef}
        handleScrollTo={handleScrollTo}
        stickyNav={stickyNav}
        setStickyNav={setStickyNav}
        navRef={navRef}
        linksHeight={linksHeight}
        setLinksHeight={setLinksHeight}
        aboutRef={aboutRef}
        setShowBackTopBtn={setShowBackTopBtn}
      />
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <Contact contactRef={contactRef} />
      <Footer />
      <BackToTopBtn
        showBackTopBtn={showBackTopBtn}
        handleScrollTo={handleScrollTo}
      />
    </>
  );
};
export default App;
