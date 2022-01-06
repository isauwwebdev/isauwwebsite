import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom'

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


function App() {
    const [expanded, setExpanded] = React.useState(false);
    const [solid, setSolid] = React.useState(false);

    var navbarRef = React.useRef()
    React.useEffect(() => {
        // 'load' event listener to hide the preloader once the main content is loaded
        window.addEventListener('load', () => {
            document.getElementById("preloader").style.display = "none";
        });

        // 'scroll' event listener to change opacity of navbar. Initially opaque, but turns solid after scrolling down 100px.
        window.addEventListener('scroll', () => {
            if (window.scrollY >= window.innerHeight) {
                setSolid(true); // true = solid
            } else {
                setSolid(false); // false = opaque
            }
        });

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

    return (
        <BrowserRouter basename="/isauw">
            <div>
                <section id="preloader">
                    <img alt="isauwbird" src="../images/isauwbird-red.png" />
                </section>

                <header>
                    {/* Navbar */}
                    <Navbar ref={navbarRef} expand="lg" variant="dark" fixed="top" className="navSolid" className={solid ? "navSolid" : "navOpaque"} expanded={expanded}>
                        <Container>
                            {/* ISAUW Brand */}
                            <Navbar.Brand href="#home">
                                <Link to="/">
                                    <img alt="isauwlogo-white" src="../images/isauwlogo-white.png" className="isauw-logo" />
                                </Link>
                            </Navbar.Brand>

                            {/* Collapses to a hamburger menu at the expand="lg" breakpoint */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav"  className={expanded ? "openclass" : "closeclass"} onClick={() => setExpanded(!expanded)}/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto navList"> {/* ms-auto right aligns the nav links */}
                                    <NavLink to="/" className="navLink" exact activeClassName="navLinkActive" onClick={() => setExpanded(false)}>Home</NavLink>
                                    <NavLink to="/events" className="navLink" exact activeClassName="navLinkActive" onClick={() => setExpanded(false)}>Events</NavLink>
                                    <NavLink to="/about" className="navLink" exact activeClassName="navLinkActive" onClick={() => setExpanded(false)}>About</NavLink>
                                    <NavLink to="/shop" className="navLink" exact activeClassName="navLinkActive" onClick={() => setExpanded(false)}>Shop</NavLink>
                                    {/* <NavLink to="/sponsors" className="navLink" exact activeClassName="navLinkActive" onClick={() => setExpanded(false)}>Sponsors</NavLink> */}
                                </Nav>
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