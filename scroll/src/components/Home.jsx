import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import Links from "./Links";
import { throttle } from "../utils";
import heroImg from "../assets/hero-img.jpg";

const Home = ({
  handleScrollTo,
  homeRef,
  navRef,
  linksHeight,
  setLinksHeight,
  stickyNav,
  setStickyNav,
  aboutRef,
  setShowBackTopBtn,
}) => {
  const linksRef = useRef(null);

  const navToggle = () => {
    let linksHeightNew;
    if (linksRef.current.offsetHeight > 0) {
      linksHeightNew = 0;
    } else {
      linksHeightNew = `${linksRef.current.scrollHeight}px`;
    }
    setLinksHeight(linksHeightNew);
  };

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      let stickyNavNew;
      let showBackTopBtnNew;
      if (top >= navRef.current.offsetHeight) {
        stickyNavNew = true;
      } else {
        stickyNavNew = false;
      }

      if (top >= aboutRef.current.offsetTop - navRef.current.offsetHeight) {
        showBackTopBtnNew = true;
      } else {
        showBackTopBtnNew = false;
      }

      setStickyNav(stickyNavNew);
      setShowBackTopBtn(showBackTopBtnNew);
    };
    window.addEventListener("scroll", throttle(handleScroll, 10));
  }, []);

  return (
    <section
      id="home"
      className="hero-container"
      ref={homeRef}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-center">
        <nav className={stickyNav ? "nav sticky" : "nav"} ref={navRef}>
          <div className="nav-center">
            <div className="logo__nav-btn">
              <img
                src="https://img.freepik.com/premium-vector/label-banner-logo-template-black_760861-102.jpg?w=1380"
                alt="logo"
                className="logo"
              />
              <button className="nav-btn" onClick={navToggle}>
                <FaBars />
              </button>
            </div>
            <Links
              linksHeight={linksHeight}
              linksRef={linksRef}
              handleScrollTo={handleScrollTo}
            />
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
            <a
              href="#contact"
              className="scroll-link"
              onClick={(e) => handleScrollTo({ e, href: "#contact" })}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
