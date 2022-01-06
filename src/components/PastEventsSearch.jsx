import React, { useState } from 'react';
import PastEventsGallery from './PastEventsGallery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchFilters from './SearchFilters';

// import _ from 'lodash';

import events from '../data/events.json';

function PastEventsSearch() {
    const pastEvents = events.filter((event) => {
        return event.completed;
    });
    const [searchText, setSearchText] = useState("");
    const [displayedData, setDisplayedData] = useState(pastEvents);

    const applyFilter = (yearPicked) => {
        if (yearPicked === '') {
            setDisplayedData(displayedData);
        } else {
            const filteredData = displayedData.filter((event) => {
                if (event.year === yearPicked) {
                    return true;
                } else {
                    return false;
                }
            });
            setDisplayedData(filteredData);
        }
    }

    const handleSearchText = (event) => {
        let value = event.target.value;
        if (value === '') {
            setDisplayedData(displayedData);
        }
        setSearchText(value);
        const searchEvent = displayedData.filter((event) => {
            return event.title.toLowerCase().includes(value.toLowerCase());
        });
        setDisplayedData(searchEvent);

    };
    const uniqueYearOptions = [...new Set(pastEvents.reduce((all, current) => {
        return all.concat([current.year]);
    }, []))].reverse();

    return (
        <div>
            <Container className="justify-content-center">
                <Row className="justify-content-between">
                    <Col className="col-8">
                        <form className="ml-2">
                            <textarea
                                className="searchText form-control"
                                onChange={handleSearchText}
                                value={searchText}
                                placeholder="Search a Past Event"
                                rows="1"
                                style={{ resize: "none" }}
                                onKeyPress={e => {
                                    if (e.key === 'Enter')
                                        e.preventDefault()
                                }}
                            />
                        </form>
                    </Col>
                    <Col className="col-2">
                        <SearchFilters 
                            yearOptions={uniqueYearOptions} 
                            filterCallback={applyFilter}
                        />
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