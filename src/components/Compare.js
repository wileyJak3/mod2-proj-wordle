import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ApiContext from "./contexts/ApiContext";
import { useContext } from "react";
import "./styles/main-card.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// Component wasn't complete, but it was usppose to display all the defintions available for urban dicitionary and google dictionary side by side on a single 

let Compare = () => {
  const apiContextData = useContext(ApiContext);
  let googleData = apiContextData[0].googleData[0];
  // console.error("This is the google data", googleData);

  // copy of prior print meanings funciton

  let printMeaning = () => {
    return googleData.meanings.map((Element) => (
      <div>
        <h6 id="part-of-speach">{Element.partOfSpeech}</h6>
        <p>{Element.definitions[0].definition}</p>
        <p id="example">{Element.definitions[0].example}</p>
      </div>
    ));
  }

// functon that attempted to do whats described above
  let printMeaningTab = (speechPart) => {
    return googleData.meanings[googleData.meanings.findIndex(speechPart)]((Element) => (
      <div>
        <h6 id="part-of-speach">{Element.partOfSpeech}</h6>
        <p>{Element.definitions[0].definition}</p>
        <p id="example">{Element.definitions[0].example}</p>
      </div>
    ));
  }


  // A function tht dynamically creates card tabs base on the parts of speach received for them api
  let printTabs = () => {
    return googleData.meanings.map((Element) => (
      <div>
        <Nav.Item>
          <Nav.Link><Link to = {Element.partOfSpeech} >{Element.partOfSpeech}</Link></Nav.Link>
        </Nav.Item>
      </div>
    ));
  }

// a fucntion thats suppose to dynamically get the information related to the dynamically created tabs (doesnt work)

 let  createNavTabs = () => {}
  return (
    <div>
        <Router>
      <Col>
        <Card>
          <Card.Header>
              
                  
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
              {printTabs()}
            </Nav>
            
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <div className="main-card">
                <Row>
                  <div>
                    <h2 id="title-header">{`${googleData.word}`}</h2>
                  </div>
                  <div>
                    <p id="phonetic">{`[${googleData.phonetics[0].text}]`}</p>
                  </div>
                </Row>
              </div>
            </Card.Title>
            <Card.Text>
              {googleData ? printMeaning() : null}
              {googleData ? printMeaningTab("adjective") : null}
              {/* <div className="main-card-inner">
                  <h6 id ="part-of-speach">{googleData.meanings[0].partOfSpeech}</h6>
                  <p>{googleData.meanings[0].definitions[0].definition}</p>
                  <p id ="example">{googleData.meanings[0].definitions[0].example}</p>
                  </div> */}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Switch>
          <Route path="/Dictionary">
            {/* {googleData.meanings ? <MainDictionaryCard /> : null} */}
          </Route>

          <Route path="/Urban">
            {/* {allApiData[1].urbanData ? <UrbanMainCard /> : null} */}
          </Route>

          <Route path="/Compare">
            {/* {allApiData[1].urbanData ? <Compare/> : null} */}
          </Route>

          <Route path="/">
            {/* {allApiData[0].googleData ? <MainDictionaryCard /> : null} */}
          </Route>
          {/* <DictionaryCard/> */}
        </Switch>
        </Card>
      </Col>
      </Router>
    </div>
  );
}

export default Compare;
