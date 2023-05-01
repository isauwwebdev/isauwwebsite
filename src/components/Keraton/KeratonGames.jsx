import React from 'react';
import {Row, Col,Card} from 'react-bootstrap'; 
import games from '../../data/keraton-games.json'

function KeratonGames() {
    // <div>
    //   <div className="py-5" style={{ }}>
    //     <h1 className="py-3 keraton-section-header">Activities</h1>
    //   </div>
    //   <Row xs={3} className="justify-content-center">
    //   {games.map((game, idx) => (
    //     <Col className="games-col">
    //       <Card>
    //         <Card.Img variant="top" src={game.img} />
    //         <Card.Body>
    //           <Card.Title className="keraton-games-text">{game.name}</Card.Title>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
    // </div>
    return (
      <div >
        <div className="py-5" style={{ }}>
         <h1 className="py-3 keraton-section-header">Activities</h1>
       </div>
          <Row xs={3} className="justify-content-center" style={{display: "flex"}}>
            {games.map((game, idx) => {
              return (
                <Col style={{alignSelf: "flex-start", marginTop: `calc(4px + 0.2vw)`}}>
                    <Card.Img className="mx-auto keraton-games-image" src={game.img} style={{width: `calc(100% - 10vw)`, display: 'block'}} alt="" />
                    <Card.Title className="keraton-games-text">{game.name}</Card.Title>
                </Col>
              )
            })}
          </Row>
        </div>
  )
}
export default KeratonGames