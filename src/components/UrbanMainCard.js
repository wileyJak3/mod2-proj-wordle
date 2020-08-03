import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ApiContext from "./contexts/ApiContext";
import { useContext } from "react";
import "./styles/main-card-urban.css";

function MainDictionCard() {
  const apiContextData = useContext(ApiContext);
  let urbanData = apiContextData[1].urbanData.list;
  urbanData = urbanData.splice(0, 2);

  console.error("This is the urban data", urbanData);

  function printMeaning() {
    return urbanData.map((Element) => (
      <div id="main-card-urban">
        {console.log("this is the element", { Element })}

        <li>
          <p>{Element.definition}</p>
          <p id="example">{Element.example}</p>
          <p id="author">
            by {Element.author} {Element.written_on.substring(0, 10)}
          </p>
          <div id="like-dislike"></div>

          Row>
              <Col>
                <p>Likes:{Element.thumbs_up}</p>
              </Col>
              <Col>
                <p id="left-border">Dislikes:{Element.thumbs_down}</p>
              </Col>
            </Row>

            </div>
        </li>
      </div>
    ));

    //   for(let i = 0; i<=2;i++){
    //    return <div className="main-card-inner">

    return (
      <div>
        <Container>
          <Row>
            <Col>