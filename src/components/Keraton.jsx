import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import KeratonCountdown from './KeratonCountdown';
import KeratonVideo from './KeratonVideo';
import KeratonAbout from './KeratonAbout';
import KeratonPerformers from './KeratonPerformers';
import KeratonFood from './KeratonFood';
import KeratonActivities from './KeratonActivities';
import KeratonGetInvolved from './KeratonGetInvolved'



function Keraton() {

    return (
        <div>
            <KeratonVideo></KeratonVideo>
            <Container>
                <KeratonAbout></KeratonAbout>
                <KeratonPerformers></KeratonPerformers>
                <KeratonFood></KeratonFood>
            </Container>
        </div>
    );
}

export default Keraton;

/*
<KeratonVideo></KeratonVideo>
            <KeratonCountdown keratonDate={new Date(1651964400000)}></KeratonCountdown>
            <KeratonAbout></KeratonAbout>
            <Container>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="keraton-accordion-header">Performers</Accordion.Header>
                        <Accordion.Body>
                            <KeratonPerformers></KeratonPerformers>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className="keraton-accordion-header">Food</Accordion.Header>
                        <Accordion.Body>
                            <KeratonFood></KeratonFood>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="keraton-accordion-header">Activities</Accordion.Header>
                        <Accordion.Body>
                            <KeratonActivities></KeratonActivities>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className="keraton-accordion-header">Get Involved!</Accordion.Header>
                        <Accordion.Body>
                            <KeratonGetInvolved></KeratonGetInvolved>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
 */