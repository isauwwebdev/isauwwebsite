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
    const [displayedData, setDisplayedData] = useState(pastEvents);

    const handleSearchText = (event) => {
        let value = event.target.value;
        if (value === '') {
            setDisplayedData(pastEvents);
        }
        setSearchText(value);
        const searchEvent = pastEvents.filter((event) => {
            return (event.title.toLowerCase().includes(value.toLowerCase()) ||
                event.text.toLowerCase().includes(value.toLowerCase()));
        });
        setDisplayedData(searchEvent);

    };
    return (
        <div>
            <Container className="justify-content-center">
                <Row className="justify-content-between">
                    <Col className="col-8">
                        <form className="ml-2">
                            <div className="form-group mb-2">
                                <label htmlFor="searchQuery" className="mb-2">What events do you want to see?</label>
                                <input type="text" className="searchText form-control" placeholder="Search For a Past Event"
                                    value={searchText} onChange={handleSearchText} />
                            </div>
                        </form>
                    </Col>
                    <Col className="col-2">
                    </Col>
                </Row>
            </Container>
            <Container>
                <PastEventsGallery data={displayedData}></PastEventsGallery>
            </Container>
        </div>
    );
}

export default PastEventsSearch;