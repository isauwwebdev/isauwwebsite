import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Home/Home";
import Events from "./Events/Events";
import Shop from "./Shop/Shop";
import About from "./About/About";
import Keraton from "./Keraton/Keraton";
import Officers from "./Officers/Officers";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import SocialLinks from "./SocialLinks";
import Apply from "./Apply/Apply";
import "./index.css"; // Tailwind CSS
import EventSignUpForm from "./Events/EventSignUpForm";
import eventsData from "../data/eventsData";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const [keratonPage, setKeratonPage] = useState(false);
  const [keratonScrollDown, setKeratonScrollDown] = useState(false);
  const [events, setEvents] = useState([]);
  const [uncompletedEvents, setUncompletedEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname.substring(1)
  );
  const [isMobile, setIsMobile] = useState(false);

  const getEvents = () => {
    const events_ = [];
    const uncompletedEvents_ = [];
    for (const event of eventsData) {
      if (!event.completed) {
        uncompletedEvents_.push(event);
      }
      events_.push(event);
    }

    setEvents(events_);
    setUncompletedEvents(uncompletedEvents_);
  };

  useEffect(getEvents, []);

  const resetHeight = () => {
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
  };
  // called to initially set the height.
  resetHeight();

  const navbarRef = useRef();
  useEffect(() => {
    let keratonY = window.scrollY;

    // 'load' event listener to hide the preloader once the main content is loaded
    window.addEventListener("load", () => {
      document.getElementById("preloader").style.display = "none";
      if (currentPage.includes("keraton")) {
        setKeratonPage(true);
      } else {
        setKeratonPage(false);
      }
      setCurrentPage(window.location.pathname.substring(1));
    });

    // update window size
    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        setExpanded(false);
      }

      setIsMobile(window.innerWidth < 768);
      // reset the height whenever the window's resized
      resetHeight();
    });

    // closes collapsed navbar after clicking outside the navbar */
    document.addEventListener("mousedown", (event) => {
      if (!navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset === 0) {
        setKeratonScrollDown(false);
      }
      if (window.scrollY > keratonY) {
        setKeratonScrollDown(true);
      } else {
        setKeratonScrollDown(false);
      }
      keratonY = window.scrollY;
    });
  });

  // const [showPopUp, setShowPopUp] = useState(true);
  // function renderPopUp() {
  //     if (showPopUp) {
  //         return (
  //             <Alert className="alert-fixed"
  //                 variant="dark"
  //                 onClose={() => setShowPopUp(false)}
  //                 dismissible
  //                 closeVariant="white">
  //             </Alert>
  //         );
  //     }
  // }

  // 'scroll' event listener to change opacity of navbar. Initially opaque, but turns solid after scrolling down 70px.
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 70) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <section id="preloader">
          {/* <img alt="isauwbird" src="../images/isauwbird-red.png" /> */}
          <img alt="isauwbird" src="../preloader2.gif" />
        </section>

        <header>
          {/* Navbar */}
          <Navbar
            ref={navbarRef}
            expand="lg"
            fixed="top"
            className={`${
              keratonPage
                ? keratonScrollDown
                  ? "keratonHide"
                  : "keratonNav"
                : navBar
                ? "navSolid active"
                : "navSolid"
            } ${expanded ? "navOpen" : "navClose"}`}
            expanded={expanded}
          >
            <Container className="navContainer">
              {/* ISAUW Brand */}
              <Navbar.Brand href="#home">
                <Link to="/">
                  {keratonPage ? (
                    <img
                      alt="isauwlogo-black"
                      src="../images/isauwlogo-black.png"
                      className="isauw-logo"
                    />
                  ) : (
                    <img
                      alt="isauwlogo-white"
                      src="../images/isauwlogo-white.png"
                      className="isauw-logo"
                    />
                  )}
                </Link>
              </Navbar.Brand>

              {/* Collapses to a hamburger menu at the expand="lg" breakpoint */}
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className={
                  expanded ? "hamburger-icon-open" : "hamburger-icon-close"
                }
                onClick={() => setExpanded(!expanded)}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto navList">
                  {" "}
                  {/* ms-auto right aligns the nav links */}
                  <NavLink
                    to="/"
                    className={`navLink navLink-fade-up`}
                    exact
                    activeClassName="navLinkActive"
                    onClick={() => {
                      setExpanded(false);
                      setKeratonPage(false);
                    }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/team"
                    className={`navLink navLink-fade-up`}
                    exact
                    activeClassName="navLinkActive"
                    onClick={() => {
                      setExpanded(false);
                      setKeratonPage(false);
                    }}
                  >
                    Team
                  </NavLink>
                  <NavLink
                    to="/events"
                    className={`navLink navLink-fade-up`}
                    exact
                    activeClassName="navLinkActive"
                    onClick={() => {
                      setExpanded(false);
                      setKeratonPage(false);
                    }}
                  >
                    Events
                  </NavLink>
                  {/*<NavLink to="/about" className={`navLink navLink-fade-up`} exact activeClassName="navLinkActive" onClick={() => {setExpanded(false); setKeratonPage(false)}}>About</NavLink>*/}
                  {/* <NavLink to="/shop" className={`navLink navLink-fade-up`} exact activeClassName="navLinkActive" onClick={() => { setExpanded(false); setKeratonPage(false) }}>Shop</NavLink> */}
                  <NavLink
                    to="/keraton"
                    className={`navLink navLink-fade-up`}
                    exact
                    activeClassName="navLinkActive"
                    onClick={() => {
                      setExpanded(false);
                      setKeratonPage(true);
                    }}
                  >
                    Keraton
                  </NavLink>
                  <NavLink
                    to="/apply"
                    className={`navLink navLink-fade-up`}
                    exact
                    activeClassName="navLinkActive"
                    onClick={() => {
                      setExpanded(false);
                      setKeratonPage(false);
                    }}
                  >
                    Apply
                  </NavLink>
                </Nav>
                {expanded && <SocialLinks />}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <Switch>
          <Route path="/" exact render={() => <Home isMobile={isMobile} />} />
          <Route path="/events" component={Events} />
          {/* TODO: make this auto generate for each of eventsData.js.eventsData.completed === false  */}

          {/* Dynamically generate routes for uncompleted events */}
          {/* {uncompletedEvents.map((uncompletedEvent, index) => {
            const eventPath = `/sign-up-${uncompletedEvent.title
              .toLowerCase()
              .replace(/ /g, "-")}`;

            return (
              <Route
                key={index}
                path={eventPath}
                render={() => (
                  <EventSignUpForm
                    eventName={uncompletedEvent.title}
                    BGImage={
                      uncompletedEvent.BGImage || "/default/background.png"
                    } // Default background if none provided
                    firestorePath={
                      uncompletedEvent.firestorePath || "default/firestore/path"
                    } // Default path if none provided
                    posterImage={
                      uncompletedEvent.img[0]?.src || "/default/poster.png"
                    } // Default poster if none provided
                    rsvp={uncompletedEvent.rsvp || false} // Default RSVP status
                  />
                )}
              />
            );
          })} */}
          <Route
            path="/sign-up-test-event"
            render={() => (
              <EventSignUpForm
                eventName="Test Event"
                BGImage="/events/stampquest/stampQuestFormBG.png"
                firestorePath="2024/stamp-quest/event-registrations"
                posterImage="/events/stampquest/stamp_quest_poster.png"
              />
            )}
          />
          {/* <Route
            path="/sign-up-seathrough"
            render={() => (
              <EventSignUpForm
                eventName="Seathrough"
                BGImage="/events/seathrough/2024/seathrough_banner.png"
                firestorePath="2024/seathrough/event-registrations"
                posterImage="/events/seathrough/2024/seathrough_poster.png"
                rsvp={true}
              />
            )}
          /> */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/shop" component={Shop} /> */}
          <Route
            path="/keraton"
            component={() => {
              window.location.href = "https://keraton.vercel.app/";
              return null;
            }}
          />
          <Route path="/team" component={Officers} />
          {<Route path="/apply" component={Apply} />}
        </Switch>

        {/* {renderPopUp()} */}

        {!keratonPage && <Footer />}

        {/* Bootstrap JS */}
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin
        ></script>
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin
        ></script>
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin
        ></script>
      </div>
    </BrowserRouter>
  );
}

export default App;
