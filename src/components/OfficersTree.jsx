import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import officers from '../data/officers.json'

 function OfficersTree() {

    return (
        <div>
            {officers.map((group, i) => {
                 return(<div style={{ marginBottom: `calc(54px + 2vw)` }}>
                     {group.content.map((rows, j) => {
                         return (
                             <div>
                                 <Row xs={3} className="justify-content-center" style={{ display: "flex" }}>
                                     {rows.row.map((officer, k) => {
                                         return (
                                             <Col style={{ display: "flex", background: "linear-gradient(#fddd39 0 0) bottom/100% 50% no-repeat" }}>
                                                 <div style={{ alignSelf: "flex-end" }}>
                                                     <img className="mx-auto" src={officer.img} style={{ width: `calc(100% - 12vw + 20px)` }}></img>
                                                 </div>
                                             </Col>
                                         )
                                     })}
                                 </Row>
                                 <Row xs={3} className="justify-content-center" style={{ display: "flex", marginBottom: `calc(16px + 0.4vw)` }}> 
                                     {rows.row.map((officer, k) => {
                                         return (
                                             <Col style={{ alignSelf: "flex-start", marginTop: `calc(4px + 0.2vw)` }}>
                                                 <h3 style={{ fontWeight: "700", fontSize: `calc(8px + 0.75vw)`, marginBottom: "0" }}>{officer.position}</h3>
                                                 <p style={{ fontWeight: "300", fontSize: `calc(8px + 0.6vw)`, marginBottom: "0" }}>{officer.name}</p>
                                             </Col>
                                         )
                                     })}
                                 </Row>
                             </div>
                         )
                     })}
                 </div>)
             })}
         </div>
     );
}

export default OfficersTree