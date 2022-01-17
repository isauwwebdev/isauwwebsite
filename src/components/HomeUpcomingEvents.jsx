import React from 'react';
import events from '../data/events.json'
import Container from 'react-bootstrap/Container'
import UpcomingEventsCard from './UpcomingEventsCard';

function HomeUpcomingEvents() {
    return (
        <Container>
            <div className="row">
                {events.map((event, i) => {
                    if (i < 3) {
                        return (
                            <div className="col-md-4 home">
                                <UpcomingEventsCard title={event.title} month={event.month} date={event.date} time={event.time} location={event.location} img={event.img} />
                            </div>
                        )
                    }
                })}
            </div>
        </Container>
    );
}

export default HomeUpcomingEvents;