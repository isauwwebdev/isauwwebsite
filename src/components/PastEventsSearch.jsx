import React, { useState } from 'react';
import PastEventsGallery from './PastEventsGallery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import _ from 'lodash';

import events from '../data/events.json';
// import Highlighter from "react-highlight-words";

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
        const searchEvents = pastEvents.filter((event) => {
            return (event.title.toLowerCase().includes(searchText.toLowerCase()) ||
                event.text.toLowerCase().includes(searchText.toLowerCase()));
        });
        const sortEvents = _.sortBy(searchEvents, sortSelection);
        /* const highlightEvents = filteredEvents.map((event) => {
            const titleText = event.title;
            const descrText = event.text;
            if (titleText.toLowerCase().includes(value.toLowerCase())) {
                event.title.replace(value.toLowerCase(), <Highlighter
                    searchWords={value.toLowerCase()}
                    autoEscape={true}
                    textToHighlight={titleText}
                />);
            }
            if (descrText.toLowerCase().includes(value.toLowerCase())) {
                event.text.replace(value.toLowerCase(), <Highlighter
                    searchWords={value.toLowerCase()}
                    autoEscape={true}
                    textToHighlight={descrText}
                />);
            }
            return event;
        }); */
        setFilteredData(sortEvents);
    };
    return (
        <section className="my-5 btm-margin">
            <Container>
                <h1 style={{ paddingLeft: `calc(0.4vw + 1.5px)`, marginBottom: `calc(0.12rem + 0.15vw)` }}><strong >Past Events</strong></h1>
                <Row className="justify-content-between" style={{ marginBottom: `calc(1.25rem + 1.5vw)` }}>
                    <Col className="col-8">
                        <form style={{ paddingLeft: `calc(0.4vw + 1.5px)` }} >
                            <input type="text" style={{ fontSize: `calc(12px + 0.3vw)` }} className="search-text form-control" placeholder="Search Event Name or Keywords"
                                value={searchText} onChange={handleSearchText} />
                        </form>
                    </Col>
                    <Col className="col-3">
                        <select className="sortForm form-select" value={sortSelection} onChange={handleSelection}>
                            <option value="" disabled selected>Sort By</option>
                            <option>Show All Events</option>
                            {sortOptions}
                        </select>
                    </Col>
                    <Col className="col-1">
                        <button type="submit" className="btn btn-dark" onClick={handleClick}>Search!</button>
                    </Col>
                </Row>
            </Container>

            <PastEventsGallery data={filteredData}></PastEventsGallery>
        </section>
    );
}

export default PastEventsSearch;