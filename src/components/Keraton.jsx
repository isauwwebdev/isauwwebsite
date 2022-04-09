import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

import KeratonVideo from './KeratonVideo';
import KeratonAbout from './KeratonAbout';
import KeratonPerformers from './KeratonPerformers';
import KeratonFood from './KeratonFood';
import KeratonActivities from './KeratonActivities';
import Sponsors from './Sponsors';
import KeratonGetInvolved from './KeratonGetInvolved'

function Keraton() {
    return (
        <div>
            <KeratonVideo></KeratonVideo>
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
        </div>
    );
}

export default Keraton;
