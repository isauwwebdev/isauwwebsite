import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link, useLocation } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import Alert from 'react-bootstrap/Alert'

import Home from './Home';
import Events from './Events';
import Shop from './Shop';
import About from './About';
import Sponsors from './Sponsors';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SocialLinks from './SocialLinks';

function App() {
    const [expanded, setExpanded] = React.useState(false);
    const [navBar, setNavBar] = useState(false);
    var navbarRef = React.useRef()
    React.useEffect(() => {
        // 'load' event listener to hide the preloader once the main content is loaded
        window.addEventListener('load', () => {
            document.getElementById("preloader").style.display = "none";
        });

        // update window size
        window.addEventListener('resize', () => {
            if(window.innerWidth > 992) {
                setExpanded(false);
            }
        })

        // closes collapsed navbar after clicking outside the navbar */
        document.addEventListener("mousedown", (event) => {
            if (!navbarRef.current.contains(event.target)) {
                setExpanded(false)
            }
        })
    })

    // const [showPopUp, setShowPopUp] = React.useState(true);
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
    const navBarBackground = () => {
        if (window.scrollY >= 70) {
            setNavBar(true)
        } else {
            setNavBar(false);
        }
    }
    window.addEventListener('scroll', navBarBackground);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <div>
                <section id="preloader">
                    <img alt="isauwbird" src="../images/isauwbird-red.png" />
                </section>

                <header>
                    {/* Navbar */}
                    <Navbar ref={navbarRef} expand="lg" fixed="top" className={`${navBar ? 'navSolid active' : 'navSolid'} ${expanded ? 'navOpen' : 'navClose'}`} expanded={expanded}>
                        <Container className="navContainer">
                            {/* ISAUW Brand */}
                            <Navbar.Brand href="#home">
                                <Link to="/">
                                    <img alt="isauwlogo-white" src="../images/isauwlogo-white.png" className="isauw-logo" />
                                </Link>
                            </Navbar.Brand>

                            {/* Collapses to a hamburger menu at the expand="lg" breakpoint */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className={expanded ? "hamburger-icon-open" : "hamburger-icon-close"} onClick={() => setExpanded(!expanded)} />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto navList"> {/* ms-auto right aligns the nav links */}
                                    <NavLink to="/" className={`navLink navLink-fade-up`} exact activeClassName="navLinkActive" onClick={() => setExpanded(false)}>Home</NavLink>
                                    <NavLink to="/events" className={`navLink navLink-fade-up`} exact activeClassName="navLinkActive" onClick={() => setExpanded(false)}>Events</NavLink>
                                    <NavLink to="/about" className={`navLink navLink-fade-up`} exact activeClassName="navLinkActive" onClick={() => setExpanded(false)}>About</NavLink>
                                    <NavLink to="/shop" className={`navLink navLink-fade-up`} exact activeClassName="navLinkActive" onClick={() => setExpanded(false)}>Shop</NavLink>
                                    {/* <NavLink to="/sponsors" className="navLink" exact activeClassName="navLinkActive" onClick={() => setExpanded(false)}>Sponsors</NavLink> */}
                                </Nav>
                                { expanded ? <SocialLinks /> : null }
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/events" component={Events} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/sponsors" component={Sponsors} />
                </Switch>

                {/* {renderPopUp()} */}

                <Footer />

                {/* Bootstrap JS */}
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>
                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossOrigin></script>
                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossOrigin></script>
            </div>
        </BrowserRouter>

    );
}

export default App;