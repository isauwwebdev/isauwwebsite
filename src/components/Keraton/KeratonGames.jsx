import React from 'react';
import {Row, Col,Card} from 'react-bootstrap'; 
import games from '../../data/keraton-games.json'

function KeratonGames() {
  return (
    <div>
      <div className="py-5" style={{ }}>
        <h1 className="py-3 keraton-section-header">Activities</h1>
      </div>
      <Row xs={3} className="justify-content-center">
      {games.map((game, idx) => (
        <Col className="games-col">
          <Card>
            <Card.Img variant="top" src={game.img} />
            <Card.Body>
              <Card.Title className="keraton-games-text">{game.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>

  )
}
export default KeratonGames