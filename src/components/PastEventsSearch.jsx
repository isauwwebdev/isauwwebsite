import React, { useState } from 'react';
import PastEventsGallery from './PastEventsGallery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import _ from 'lodash';

import events from '../data/events.json';

function PastEventsSearch() {
    const pastEvents = events.filter((event) => {
        return event.completed;
    });
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(pastEvents);

    const handleSearchText = (event) => {
        const value = event.target.value;
        setSearchText(value);
        const filteredEvents = pastEvents.filter((event) => {
            return (event.title.toLowerCase().includes(value.toLowerCase()) ||
                event.text.toLowerCase().includes(value.toLowerCase()));
        });
        setFilteredData(filteredEvents);
    };
    return (
        <section className="my-5 btm-margin">            
            <Container>
                <h1 style={{ paddingLeft: `calc(0.4vw + 1.5px)`, marginBottom: `calc(0.12rem + 0.15vw)` }}><strong >Past Events</strong></h1>
                <Row className="justify-content-between" style={{ marginBottom: `calc(1.25rem + 1.5vw)` }}>
                    <Col className="col-8" >
                        <form style={{ paddingLeft: `calc(0.4vw + 1.5px)` }} >
                            <input type="text" style={{ fontSize: `calc(12px + 0.3vw)` }} className="search-text form-control" placeholder="Search Past Events"
                                value={searchText} onChange={handleSearchText} />
                        </form>
                    </Col>
                </Row>
            </Container>

            <PastEventsGallery data={filteredData}></PastEventsGallery>
        </section>
    );
}

export default PastEventsSearch;