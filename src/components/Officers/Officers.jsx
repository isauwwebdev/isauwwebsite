import Container from 'react-bootstrap/Container'
import OfficersPage from "./OfficersPage";
import React, {useState} from 'react';

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
      </div>
      <Container className="text-center" style={{gridAutoRows: "1fr"}}>
        <button className="btn" style={{width: "30%", borderRight: "1px solid rgba(0,0,0,.125)"}}>Officers</button>
        <button className="btn" style={{width: "30%", borderRight: "1px solid rgba(0,0,0,.125)"}}>Department</button>
        <OfficersPage showPrimaries={showPrimaries} showDept={showDept}/>
      </Container>
    </div>
  );
};

export default Officers;