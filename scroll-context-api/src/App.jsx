import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";
import AppContext from "./context";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);
  const [showBackTopBtn, setShowBackTopBtn] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  const targetRef = {
    "#home": homeRef,
    "#about": aboutRef,
    "#contact": contactRef,
    "#services": servicesRef,
  };

  const scrollToEl = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    history.replaceState(null, null, href);
    triggerScroll(href);
  };

  useEffect(() => {
    if (location.hash.length > 0) {
      triggerScroll(location.hash);
    }
  }, []);

  const triggerScroll = (hash) => {
    const target = targetRef[hash];
    const navHeight = navRef.current.getBoundingClientRect().height;
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    let top = target.current.offsetTop - navHeight;
    if (fixedNav && showLinks) {
      top += linksHeight;
    }
    setShowLinks(false);
    setTimeout(() => {
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
  };

  return (
    <AppContext.Provider
      value={{
        linksRef,
        navRef,
        showLinks,
        setShowLinks,
        fixedNav,
        setFixedNav,
        homeRef,
        aboutRef,
        contactRef,
        servicesRef,
        scrollToEl,
        showBackTopBtn,
        setShowBackTopBtn,
      }}
    >
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
      <BackTopBtn />
    </AppContext.Provider>
  );
};
export default App;
