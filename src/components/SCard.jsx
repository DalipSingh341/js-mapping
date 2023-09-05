import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MapData } from "../components/Data";

const SCard = () => {
  return (
    <div>
      <Container>
        <Row className=" align-items-center justify-content-center">
          {MapData.map((data) => {
            return (
              <Col key={data.id[0]} md={6} lg={4} className=" pt-4 ">
                <div className="map_box ">
                  <div className="d-flex align-items-center justify-content-center  ">
                    <img className="w-100" src={data.image} alt="" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center  ">
                    <h2>{data.heading}</h2>
                  </div>
                  <div className="d-flex align-items-center justify-content-center  ">
                    <p className="para1">{data.para}</p>
                  </div>
                </div>
              </Col>
            );
          })}
          ;
        </Row>
      </Container>
    </div>
  );
};

export default SCard;
