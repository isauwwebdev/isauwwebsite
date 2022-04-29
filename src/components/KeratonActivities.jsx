import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

function KeratonActivities() {
    return(
        <div className="keraton-activities">
        <Container>
        <h1 className="my-1 keraton-games"><strong>Games</strong></h1>
        <Row>
            <Col>
            <div className='activity-container'>
                <img src="../images/bakiak.jpeg" alt="games_image" class="keraton-activities-image"></img>
                <div class="keraton-activities-overlay">
                    <h2 className="my-3" style={{ color: 'red'  }}>Bakiak</h2>
                    <p className="competition-desc">Bakiak is a kind of sandals made from wood. The Bakiak game requires togetherness and cooperation in the team to win.  The participants should walk together to keep the balance and avoid falling. The bakiak itself is a long wooden sandal that can be used by four to six participants</p>
                </div>
            </div>
            </Col>
            <Col>
                <div className='activity-container'>
                    <img src="../images/sack.jpeg" alt="games_image" class="keraton-activities-image"></img>
                    <div class="keraton-activities-overlay">
                        <h2 className="my-3" style={{ color: 'red'  }}>Balap Karung</h2>
                        <p className="competition-desc">Balap karung (sack race) game is one of popular traditional games in Indonesia Independence Day commemoration. To play the game, the participant should put their lower body into a sack; then, they race to the finish line (Munir, 2019)</p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className='activity-container'>
                    <img src="../images/hopscotch.jpeg" alt="games_image" class="keraton-activities-image"></img>
                    <div class="keraton-activities-overlay">
                        <h2 className="my-3" style={{ color: 'red'  }}>Hopscotch</h2>
                        <p className="competition-desc">Hopscotch is a game where a player tosses an object (such as a stone) into areas of a figure outlined on the ground and hops through the figure and back to regain the object. It is a game played by the masses and everyone can enjoy.</p>
                    </div>
                </div>
            </Col>
        </Row>
        </Container>
        </div>
    )
}
export default KeratonActivities