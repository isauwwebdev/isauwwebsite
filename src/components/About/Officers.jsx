import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import officers from "../../data/officers.json";
import React from "react";

function Officers() {
  return (
    <div>
      {officers.map((group, i) => {
        return (
          <div className="division">
            {group.content.map((rows, j) => {
              return (
                <div>
                  <Row
                    xs={3}
                    className="justify-content-center"
                    style={{ display: "flex" }}
                  >
                    {rows.row.map((officer, k) => {
                      return (
                        <Col className={officer.position}>
                          <div style={{ alignSelf: "flex-end" }}>
                            <img
                              className="mx-auto"
                              src={officer.img}
                              style={{ width: `calc(100% - 12vw + 20px)` }}
                              alt=""
                            ></img>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                  <Row
                    xs={3}
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      marginBottom: `calc(16px + 0.4vw)`,
                    }}
                  >
                    {rows.row.map((officer, k) => {
                      return (
                        <Col
                          style={{
                            alignSelf: "flex-start",
                            marginTop: `calc(4px + 0.2vw)`,
                          }}
                        >
                          <h3 className="officer-position">
                            {officer.position}
                          </h3>
                          <p className="officer-name">{officer.name}</p>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Officers;
