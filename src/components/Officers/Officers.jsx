import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import OfficerGallery from "./OfficerGallery";
import officers from "../../data/officers.json";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Officers() {
  const [userSelection, setUserSelection] = useState("");
  const [filteredOfficers, setFilteredOfficers] = useState(officers);

  const [allIsClicked, setAllIsClicked] = useState(true);
  const [primariesIsClicked, setPrimariesIsClicked] = useState(false);
  const [FINIsClicked, setFINIsClicked] = useState(false);
  const [OPSIsClicked, setOPSIsClicked] = useState(false);
  const [COIsClicked, setCOIsClicked] = useState(false);

  useEffect(() => {
    console.log("all:" + allIsClicked);
    console.log(primariesIsClicked);
    console.log(FINIsClicked);
    console.log(OPSIsClicked);
    console.log(COIsClicked);
  });

  const handleClick = (event) => {
    if (event.target.value === "All") {
      // All button clicked
      setUserSelection("");
      setFilteredOfficers(officers);

      setAllIsClicked(!allIsClicked);
      setPrimariesIsClicked(false);
      setFINIsClicked(false);
      setOPSIsClicked(false);
      setCOIsClicked(false);
    } else {
      if (event.target.value === "Primaries") {
        setAllIsClicked(false);
        setPrimariesIsClicked(!primariesIsClicked);
        setFINIsClicked(false);
        setOPSIsClicked(false);
        setCOIsClicked(false);
      } else if (event.target.value === "Finance") {
        setAllIsClicked(false);
        setPrimariesIsClicked(false);
        setFINIsClicked(!FINIsClicked);
        setOPSIsClicked(false);
        setCOIsClicked(false);
      } else if (event.target.value === "Operations") {
        setAllIsClicked(false);
        setPrimariesIsClicked(false);
        setFINIsClicked(false);
        setOPSIsClicked(!OPSIsClicked);
        setCOIsClicked(false);
      } else {
        setAllIsClicked(false);
        setPrimariesIsClicked(false);
        setFINIsClicked(false);
        setOPSIsClicked(false);
        setCOIsClicked(!COIsClicked);
      }
      if (userSelection.includes(event.target.value)) {
        // if button is already selected, reset button on click
        setUserSelection("");
        setFilteredOfficers(officers);
      } else {
        // if button is not selected yet, filter officers based on target value
        setUserSelection(event.target.value);
        const officerSelection = officers.filter((officer) => {
          return officer.department.includes(event.target.value);
        });
        setFilteredOfficers(officerSelection);
      }
    }
  };

  return (
    <div className="officer-page">
      <div className="navbar-overlay" style={{ position: "relative" }}>
        <img
          className="d-block w-100"
          src="../images/officers/isauw-group.webp"
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
        <button
          className={`btn officer-button m-2 ${
            allIsClicked ? "officer-selected" : "unselected"
          }`}
          onClick={handleClick}
          style={{
            width: "fit-content",
            borderRight: "1px solid rgba(0,0,0,.125)",
            "font-size": "calc(10px + 0.4vw)",
            "white-space": "nowrap",
          }}
          value="All"
        >
          All
        </button>
        <button
          className={`btn officer-button m-2 ${
            primariesIsClicked ? "officer-selected" : "unselected"
          }`}
          onClick={handleClick}
          style={{
            width: "fit-content",
            borderRight: "1px solid rgba(0,0,0,.125)",
            "font-size": "calc(10px + 0.4vw)",
            "white-space": "nowrap",
          }}
          value="Primaries"
        >
          Primaries
        </button>
        <button
          className={`btn officer-button m-2 ${
            FINIsClicked ? "officer-selected" : "unselected"
          }`}
          onClick={handleClick}
          style={{
            width: "fit-content",
            borderRight: "1px solid rgba(0,0,0,.125)",
            "font-size": "calc(10px + 0.4vw)",
            "white-space": "nowrap",
          }}
          value="Finance"
        >
          Finance
        </button>
        <button
          className={`btn officer-button m-2 ${
            OPSIsClicked ? "officer-selected" : "unselected"
          }`}
          onClick={handleClick}
          style={{
            width: "fit-content",
            borderRight: "1px solid rgba(0,0,0,.125)",
            "font-size": "calc(10px + 0.4vw)",
            "white-space": "nowrap",
          }}
          value="Operations"
        >
          Operations
        </button>
        <button
          className={`btn officer-button m-2 ${
            COIsClicked ? "officer-selected" : "unselected"
          }`}
          onClick={handleClick}
          style={{
            width: "fit-content",
            borderRight: "1px solid rgba(0,0,0,.125)",
            "font-size": "calc(10px + 0.4vw)",
            "white-space": "nowrap",
          }}
          value="Communications & Outreach"
        >
          Communications & Outreach
        </button>
      </Row>
      <div className="my-4">
        <Container>
          <OfficerGallery officerData={filteredOfficers} />
        </Container>
      </div>
    </div>
  );
}

export default Officers;
