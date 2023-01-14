import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import OfficerGallery from "./OfficerGallery";
import officers from '../../data/officers.json';
import Row from 'react-bootstrap/Row';

function Officers() {
  const [userSelection, setUserSelection] = useState("");
  const [filteredOfficers, setFilteredOfficers] = useState(officers);

  const handleClick = (event) => {
    if (event.target.value === "All") {
      setUserSelection("");
      setFilteredOfficers(officers);
    } else {
      if (userSelection.includes(event.target.value)) {
        setUserSelection("");
        setFilteredOfficers(officers);
      } else {
        setUserSelection(event.target.value);

        const officerSelection = officers.filter((officer) => {
          return officer.department.includes(event.target.value);
        })
        setFilteredOfficers(officerSelection);
      }
    }
  }

  return (
    <div>
      <div className="navbar-overlay" style={{ position: "relative" }}>
        <img
          className="d-block w-100"
          src="../images/officers/isauw-group.jpg"
          alt=""
          style={{ height: "calc(50vh + 10vw)" }}
        />
        <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
          <div className="animated fadeInDown">
            <h1 className="carousel-title">MEET OUR TEAM</h1>
          </div>
        </Carousel.Caption>
      </div>
      <Row className="justify-content-center mt-5">
        <button className="btn"
          onClick={handleClick}
          style={{ width: "20%", borderRight: "1px solid rgba(0,0,0,.125)", "font-size": "calc(10px + 0.4vw)" }}
          value="All">
          All
        </button>
        <button className="btn"
          onClick={handleClick}
          style={{ width: "20%", borderRight: "1px solid rgba(0,0,0,.125)", "font-size": "calc(10px + 0.4vw)" }}
          value="Primaries">
          Primaries
        </button>
        <button className="btn"
          onClick={handleClick}
          style={{ width: "20%", borderRight: "1px solid rgba(0,0,0,.125)", "font-size": "calc(10px + 0.4vw)" }}
          value="Finance">
          Finance
        </button>
        <button
          className="btn"
          onClick={handleClick}
          style={{ width: "20%", borderRight: "1px solid rgba(0,0,0,.125)", "font-size": "calc(10px + 0.4vw)" }}
          value="Operations">
          Operations
        </button>
        <button
          className="btn"
          onClick={handleClick}
          style={{ width: "25%", borderRight: "1px solid rgba(0,0,0,.125)", "font-size": "calc(10px + 0.4vw)" }}
          value="Communications & Outreach">
          Communications & Outreach
        </button>
      </Row>
      <div className="my-4">
        <OfficerGallery officerData={filteredOfficers} />
      </div>

    </div>
  );
};

export default Officers;