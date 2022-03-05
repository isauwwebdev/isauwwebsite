import React, { useState } from 'react';
import PastEventsGallery from './PastEventsGallery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';

import _ from 'lodash';

import events from '../data/events.json';
import Highlighter from "react-highlight-words";
import { computeHeadingLevel } from '@testing-library/react';

function PastEventsSearch() {
    const pastEvents = events.filter((event) => {
        return event.completed;
    });
    const [searchText, setSearchText] = useState("");
    const [sortSelection, setSortSelection] = useState("");
    const [filteredData, setFilteredData] = useState(pastEvents);
    const allKeys = Object.keys(events[0]);
    const sortKeys = [];
    for(let i = 0; i < 2; i++) {
        sortKeys.push(allKeys[i]);
    }
    const sortOptions = sortKeys.map((keyName) => {
        return <option key={keyName} value={keyName}>{keyName.substring(0,1).toUpperCase() + keyName.substring(1)}</option>
    });
    const handleSearchText = (event) => {
        const value = event.target.value;
        setSearchText(value);
    };

    const handleSelection = (event) => {
        const value = event.target.value;
        setSortSelection(value);
    };

    const handleClick = () => {
        const lowerCaseText = searchText.toLowerCase();
        const searchEvents = pastEvents.filter((event) => {
            return (event.title.toLowerCase().includes(lowerCaseText) ||
                event.text.toLowerCase().includes(lowerCaseText));
        });

        const sortEvents = searchEvents.sort(function compare(a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateA - dateB;
        }).reverse();
        
        let i = 0;
        const highlightEvents = sortEvents.map((event) => {
            if (event.title.toLowerCase().includes(lowerCaseText)) {
                let title = document.getElementsByClassName("highlight-title")[i];
                let pattern = new RegExp(`${lowerCaseText}`, "gi");
                title.innerHTML = title.textContent.replace(pattern, match => `<mark>${match}</mark>`);
            }

            if (event.text.toLowerCase().includes(lowerCaseText)) {
                let desc = document.getElementsByClassName("highlight-desc")[i];
                let pattern = new RegExp(`${lowerCaseText}`, "gi");
                desc.innerHTML = desc.textContent.replace(pattern, match => `<mark>${match}</mark>`);
            }
            i++;

            return event;
        });
        setFilteredData(highlightEvents);
    };
    return (
        <section className="my-5 btm-margin">
            <Container>
                <h1 style={{ paddingLeft: `calc(0.4vw + 1.5px)`, marginBottom: `calc(1rem + 0.6vw)`, display: "block" }}><strong >Past Events</strong></h1>
                {/* TODO: remove display: "none" to show search bar */}
                <Row className="justify-content-between" style={{ marginBottom: `calc(1.25rem + 1.5vw)`, display: "none" }}>
                    <Col className="col-10">
                        <form className="row search-bar">
                            <input type="text" className="col-10 search-text form-control-custom" placeholder="Search Event Name or Keywords"
                                value={searchText} onChange={handleSearchText} />
                            <span type="submit" className="btn btn-dark col-1" style={{margin: "0"}} onClick={handleClick}><i class="fas fa-search"></i></span>
                        </form>
                    </Col>
                    <Col className="col-2">
                        <div className="row">
                            <span className="col-4">Sort: </span>
                            <select style={{border: "none", margin: "0"}} className="sortForm form-select-custom col-4" value={sortSelection} onChange={handleSelection}>
                                {sortOptions}
                            </select>
                        </div>
                    </Col>  
                </Row>
            </Container>
            <PastEventsGallery data={filteredData}></PastEventsGallery>
        </section>
    );
}

export default PastEventsSearch;