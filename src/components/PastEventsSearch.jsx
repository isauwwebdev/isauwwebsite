import React, { useState } from 'react';
import PastEventsGallery from './PastEventsGallery';
import Container from 'react-bootstrap/Container';

// import SearchFilter from './SearchFilter';
// import SearchSort from './SearchSort';

// import _ from 'lodash';

import events from '../data/events.json';

function PastEventsSearch() {
    const pastEvents = events.filter((event) => {
        return !event.completed;
    });
    const [searchText, setSearchText] = useState("");
    const [displayedData, setDisplayedData] = useState(pastEvents);

    const handleSearchText = (event) => {
        const value = event.target.value;
        if (value === '') {
            setDisplayedData(pastEvents);
        }
        setSearchText(value);
        const searchEvent = pastEvents.filter((event) => {
            return event.title.toLowerCase().includes(value.toLowerCase());
        });
        setDisplayedData(searchEvent);

    };

    return (
        <div>
            <Container className="justify-content-center">
                <form className="ml-2">
                    <textarea
                        className="searchText form-control"
                        onChange={handleSearchText}
                        value={searchText}
                        placeholder="Search a Past Event"
                        rows="1"
                    />
                </form>
            </Container>
            <Container>
                <PastEventsGallery data={displayedData}></PastEventsGallery>
            </Container>
        </div>
    );
}

export default PastEventsSearch;