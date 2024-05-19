import heroImg from "../assets/hero-img.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleLinksHeight,
  toggleNavbarFixed,
} from "../features/navbar/navbarSlice";
import { useEffect, useRef } from "react";
import { links } from "../links";
import Link from "./Link";
import {
  handleScroll,
  setRef,
  toggleShowBackToTopBtn,
} from "../features/scroll/scrollSlice";

const Home = () => {
  const navbar = useSelector((state) => state.navbar);
  const scroll = useSelector((state) => state.scroll);
  const dispatch = useDispatch();
  const linksRef = useRef(null);
  const navRef = useRef(null);
  const homeRef = useRef(null);

  const handleLinksHeight = () => {
    let newLinksHeight = 0;
    if (navbar.linksHeight === 0) {
      newLinksHeight = linksRef.current.scrollHeight;
    } else {
      newLinksHeight = 0;
    }
    dispatch(toggleLinksHeight(newLinksHeight));
  };

  useEffect(() => {
    dispatch(setRef({ name: "homeRef", ref: homeRef }));
    dispatch(setRef({ name: "navRef", ref: navRef }));

    location.hash.length > 0 &&
      dispatch(handleScroll({ onPageLoad: true, hash: location.hash }));

    const toggleOnScroll = () => {
      let newToggleNavbarFixed = false;
      if (window.scrollY >= navRef.current.getBoundingClientRect().height) {
        newToggleNavbarFixed = true;
      } else {
        newToggleNavbarFixed = false;
      }
      dispatch(toggleNavbarFixed(newToggleNavbarFixed));

      let newShowBackToTopBtn = false;

      const aboutTopPos =
        scroll.refs.aboutRef.current.getBoundingClientRect().top -
        scroll.refs.navRef.current.getBoundingClientRect().height;
      if (aboutTopPos <= 0) {
        newShowBackToTopBtn = true;
      } else {
        newShowBackToTopBtn = false;
      }
      dispatch(toggleShowBackToTopBtn(newShowBackToTopBtn));
    };

    window.addEventListener("scroll", toggleOnScroll);

    return () => {
      window.removeEventListener("scroll", toggleOnScroll);
    };
  }, [scroll.refs]);

  return (
    <section
      id="home"
      className="hero-container"
      style={{ backgroundImage: `url(${heroImg})` }}
      ref={homeRef}
    >
      <div className="hero-center">
        <nav className={navbar.navbarFixed ? "nav sticky" : "nav"} ref={navRef}>
          <div className="nav-center">
            <div className="logo__nav-btn">
              <img
                src="https://img.freepik.com/premium-vector/label-banner-logo-template-black_760861-102.jpg?w=1380"
                alt="logo"
                className="logo"
              />
              <button className="nav-btn" onClick={handleLinksHeight}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <ul
              className="links"
              style={{ height: navbar.linksHeight }}
              ref={linksRef}
            >
              {links.map((link) => {
                return <Link link={link} key={link.id} />;
              })}
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
            <a
              href="#contact"
              className="scroll-link"
              onClick={(event) => dispatch(handleScroll({ event }))}
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
