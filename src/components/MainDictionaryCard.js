import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ApiContext from "./contexts/ApiContext";
import { useContext } from "react";
import './styles/main-card.css'

function MainDictionCard() {
  const apiContextData = useContext(ApiContext);
  let googleData = apiContextData[0].googleData[0];
  console.error("This is the google data", googleData);

  function printMeaning (){

return googleData.meanings.map(Element =>
    <div>
    <h6 id ="part-of-speach">{Element.partOfSpeech}</h6>
    <p>{Element.definitions[0].definition}</p>
    <p id ="example">{Element.definitions[0].example}</p>
    </div>

)

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
                <Card.Title>
                  <div className="main-card">
                    <Row>
                      <div><h2 id="title-header">{`${googleData.word}`}</h2></div>
                      <div><p id="phonetic">{`[${googleData.phonetics[0].text}]`}</p></div>
                    </Row>
                  </div>
                </Card.Title>
                <Card.Text>
                    {googleData ? printMeaning() : null}
                {/* <div className="main-card-inner">
                  <h6 id ="part-of-speach">{googleData.meanings[0].partOfSpeech}</h6>
                  <p>{googleData.meanings[0].definitions[0].definition}</p>
                  <p id ="example">{googleData.meanings[0].definitions[0].example}</p>
                  </div> */}
                </Card.Text>
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
