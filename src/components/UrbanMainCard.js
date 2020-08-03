import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ApiContext from "./contexts/ApiContext";
import { useContext } from "react";
import "./styles/main-card-urban.css";

// The main dictionary car is the card that shows an overview of the dictionary clientInformatio

let MainDictionCard =() => {
  const apiContextData = useContext(ApiContext);
  let urbanData = apiContextData[1].urbanData.list;
  urbanData = urbanData.splice(0, 2);

  // console.error("This is the urban data", urbanData);


  // This fucntion print out the definitions of the dictionary, received from API

  let printMeaning = () => {
    return urbanData.map((Element) => (
      <div id="main-card-urban">
        {console.log("this is the element", { Element })}
        <li>
          <p>{Element.definition}</p>
          <p id="example">{Element.example}</p>
          <p id="author">
            by {Element.author} {Element.written_on.substring(0, 10)}
          </p>
          <div id="like-dislike">
            <Row>
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
    //     <h6 id ="part-of-speach">{googleData.meanings[i].partOfSpeech}</h6>
    //     <p>{googleData.meanings[i].definitions[0].definition}</p>
    //     <p id ="example">{googleData.meanings[i].definitions[0].example}</p>
    //     </div>

    //   }
  }


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#first">Definition</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <div id="line-border">
                  <h1 id="title-header-urban">{urbanData[0].word}</h1>
                  <ol>{printMeaning()}</ol>
                </div>
                {/* {urbanData ? printMeaning() : null} */}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainDictionCard;
