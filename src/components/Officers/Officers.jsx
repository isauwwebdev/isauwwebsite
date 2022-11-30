import Container from 'react-bootstrap/Container'
import OfficersPage from "./OfficersPage";
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Officers() {
  // <OfficersPage />
  const [showPrimaries, setShowPrimaries] = useState(true);
  const [showDept, setShowDept] = useState(false);
  return (
    <div>
      <div className="navbar-overlay" style={{position: "relative"}}>
        <img
          className="d-block w-100"
          src="../images/officers/isauw-group.jpg"
          alt=""
          style={{height: "calc(50vh + 10vw)"}}
        />
         <Carousel.Caption style={{bottom: "18%", letterSpacing: "10pt"}}>
            <div className="animated fadeInDown">
              <h1 className="carousel-title">OFFICERS</h1>
            </div>
          </Carousel.Caption>
      </div>
      <Container className="" style={{gridAutoRows: "1fr"}}>
        <button className="btn" style={{width: "20%", borderRight: "1px solid rgba(0,0,0,.125)"}}>Primaries</button>
        <button className="btn" style={{width: "20%", borderRight: "1px solid rgba(0,0,0,.125)"}}>Finance</button>
        <button className="btn" style={{width: "20%", borderRight: "1px solid rgba(0,0,0,.125)"}}>Operations</button>
        <button className="btn" style={{width: "25%", borderRight: "1px solid rgba(0,0,0,.125)"}}>Communications & Outreach</button>
        <OfficersPage showPrimaries={showPrimaries} showDept={showDept}/>
      </Container>
    </div>
  );
};

export default Officers;