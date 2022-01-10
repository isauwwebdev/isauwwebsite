import React from 'react';
import Container from 'react-bootstrap/Container'
import events from '../data/events.json'
import UpcomingEventsHome from './UpcomingEventsHome';

function UpcomingEvents() {
    return (
            <div className="row">
                <h1 className="my-3" style={{ paddingLeft: `calc(0.4vw + 1.5px)`, textAlign: 'center' }}><strong>Upcoming Events</strong></h1>
                    {events.map((event, i) => {
                        if(i < 3) {
                            return (
                                <div className="col-md-4">
                                    <UpcomingEventsHome title={event.title} month={event.month} date={event.date} time={event.time} loc={event.loc} img={event.img} />
                                </div>
                            )
                        }
                    })}
            </div>
    );
}

export default UpcomingEvents;