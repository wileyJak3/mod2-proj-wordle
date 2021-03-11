import React from "react";
import {
  Container,
  Row,
  ButtonGroup,
  Button,
  Nav,
  Card,
} from "react-bootstrap";
import { Col } from "react-bootstrap";
import ApiContext from "./contexts/ApiContext";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/main-card-urban.css";
import WordContext from "./contexts/WordContext";

// The main dictionary car is the card that shows an overview of the dictionary clientInformatio

let UrbanMainCard = () => {
  const apiContextData = useContext(ApiContext);
  let urbanData = apiContextData[1].urbanData.list;
  // urbanData = urbanData.splice(0, 2);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // console.error("This is the urban data", urbanData);

  // This fucntion print out the definitions of the dictionary, received from API

  //* Function that prints the multiple definitions under each part of speech tab
  let printUrbanTab = (Element) => {
    // return googleData.meanings[googleData.meanings.findIndex(speechPart)](
    return (
      <div>
        {/* console.error("element value",element) */}
        {/* <h6 id="part-of-speach">{Element.partOfSpeech}</h6> */}

        <Card.Body>
          {/* <li> */}
          <p>{Element.definition.split("[").join("").split("]").join("")}</p>
            <p id="example">
              {Element.example.split("[").join("").split("]").join("")}
            </p>
            <p id="author">
              by {Element.author} {months[Element.written_on.substring(6, 7)]}{" "}
              {Element.written_on.substring(8, 10)},{" "}
              {Element.written_on.substring(0, 4)}
            </p>
            <div id="like-dislike">
              <Row>
                <Button id="like" variant="outline-dark">
                  <div id="inner-button">
                    <div id="inner-button-thumbs-up">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34 34"
                        >
                          <path d="M34 15.3c0-1.9-1.4-3.4-3.1-3.4h-9.7l1.5-7.8v-.5c0-.7-.3-1.4-.6-1.9L20.4 0 10.2 11.2c-.6.5-.9 1.4-.9 2.4v17c0 1.9 1.4 3.4 3.1 3.4h13.9c1.2 0 2.3-.8 2.8-2l4.6-12.1c.2-.3.2-.9.2-1.2v-3.4h.1c0 .2 0 0 0 0zM0 34h6.2V13.6H0V34z"></path>
                        </svg>
                      </div>
                      <div>
                        <p>{Element.thumbs_up}</p>
                      </div>
                    </div>
                    <div></div>
                    <div id="inner-button-thumbs-down">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34 34"
                        >
                          <path d="M27.8 0v20.4H34V0h-6.2zm-6.2 0H7.7C6.5 0 5.4.9 4.9 2L.3 14.1c-.1.3-.3.7-.3 1.2v3.4c0 1.9 1.4 3.4 3.1 3.4h9.7l-1.5 7.8v.5c0 .7.3 1.4.6 1.9l1.7 1.7 10.2-11.2c.6-.7.9-1.5.9-2.4v-17c0-1.9-1.4-3.4-3.1-3.4z"></path>
                        </svg>
                      </div>
                      <div>
                        <p>{Element.thumbs_down}</p>
                      </div>
                    </div>
                  </div>
                </Button>
                </Row>
                </div>
          {/* </li> */}
        </Card.Body>
      </div>
    );
  };

  //* Function that creates the router paths for the card links and renders the switch to show synonyms
  let createPaths = () => {
    let num = 1;
    return urbanData.map((Element) => (
      <Route path={`/${Element.word}-${num++}`}>
        {console.log(`${Element.word}-${num}`, "path")}
        {/* {console.log("meaning",meaning.partOfSpeech)} */}
        {/* {googleData.meanings ? <MainDictionaryCard /> : null} */}

        {/* <Button variant="primary" onClick={() => changeSynonymState()}>
        {" "}
        Synonyms
      </Button> */}

        {/* //~ First styling set up */}
        <Card>
          <Row>
            <Col>
              {console.log("Inside Path")}
              <ol className="custom">
                {urbanData ? printUrbanTab(Element) : null}
              </ol>
            </Col>
          </Row>
        </Card>
        {/* //~ Second styling set up */}
        {/* <Card style ={ { background:"red"}} text="light">
        <Card.Body>
          <Card.Title>Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card> */}
      </Route>
    ));
  };

  function compare(a, b) {
    if (a.thumbs_up > b.thumbs_up) return -1;
    if (b.thumbs_up > a.thumbs_up) return 1;

    return 0;
  }

  // A function tht dynamically creates card tabs base on the parts of speech received for them api
  let printTabs = () => {
    // console.log("meanings",googleData.meanings)
    let num = 1;
    return urbanData.sort(compare).map((Element) => (
      <div>
        <Nav.Item>
          <Nav.Link href={`#${Element.word}-${num}`}>
            <Link to={`${Element.word}-${num}`}>{`${
              Element.word
            }-${num++}`}</Link>
          </Nav.Link>
        </Nav.Item>

        {/* {num++} */}
      </div>
    ));
  };

  let printMeaning = () => {
    return urbanData.sort(compare).map((Element) => (
      <div>
        {/* {console.log("this is the element", { Element })} */}
        <Card>
          <li>
            <p>{Element.definition.split("[").join("").split("]").join("")}</p>
            <p id="example">
              {Element.example.split("[").join("").split("]").join("")}
            </p>
            <p id="author">
              by {Element.author} {months[Element.written_on.substring(6, 7)]}{" "}
              {Element.written_on.substring(8, 10)},{" "}
              {Element.written_on.substring(0, 4)}
            </p>
            <div id="like-dislike">
              <Row>
                <Button id="like" variant="outline-dark">
                  <div id="inner-button">
                    <div id="inner-button-thumbs-up">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34 34"
                        >
                          <path d="M34 15.3c0-1.9-1.4-3.4-3.1-3.4h-9.7l1.5-7.8v-.5c0-.7-.3-1.4-.6-1.9L20.4 0 10.2 11.2c-.6.5-.9 1.4-.9 2.4v17c0 1.9 1.4 3.4 3.1 3.4h13.9c1.2 0 2.3-.8 2.8-2l4.6-12.1c.2-.3.2-.9.2-1.2v-3.4h.1c0 .2 0 0 0 0zM0 34h6.2V13.6H0V34z"></path>
                        </svg>
                      </div>
                      <div>
                        <p>{Element.thumbs_up}</p>
                      </div>
                    </div>
                    <div></div>
                    <div id="inner-button-thumbs-down">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34 34"
                        >
                          <path d="M27.8 0v20.4H34V0h-6.2zm-6.2 0H7.7C6.5 0 5.4.9 4.9 2L.3 14.1c-.1.3-.3.7-.3 1.2v3.4c0 1.9 1.4 3.4 3.1 3.4h9.7l-1.5 7.8v.5c0 .7.3 1.4.6 1.9l1.7 1.7 10.2-11.2c.6-.7.9-1.5.9-2.4v-17c0-1.9-1.4-3.4-3.1-3.4z"></path>
                        </svg>
                      </div>
                      <div>
                        <p>{Element.thumbs_down}</p>
                      </div>
                    </div>
                  </div>
                </Button>

                {/* <Col>
                  <p id="left-border">Dislikes:{Element.thumbs_down}</p>
                </Col> */}
              </Row>
            </div>
          </li>
        </Card>
      </div>
    ));

    //   for(let i = 0; i<=2;i++){
    //    return <div className="main-card-inner">
    //     <h6 id ="part-of-speach">{googleData.meanings[i].partOfSpeech}</h6>
    //     <p>{googleData.meanings[i].definitions[0].definition}</p>
    //     <p id ="example">{googleData.meanings[i].definitions[0].example}</p>
    //     </div>

    //   }
  };

  // let getPartOfSpeechIndex = (speechPart) => {
  //   for (let i = 0; i < googleData.meanings.length; i++) {
  //     if (googleData.meanings[i].partOfSpeech == speechPart) {
  //       return i;
  //     }
  //   }
  // };

  //* Function that prints the multiple definitions under each part of speech tab
  // let printMeaningTab = (speechPart) => {
  //   // return googleData.meanings[googleData.meanings.findIndex(speechPart)](
  //   return googleData.meanings[
  //     getPartOfSpeechIndex(speechPart)
  //   ].definitions.map((singleDefinition) => (
  //     <div>
  //       {/* console.error("element value",element) */}
  //       {/* <h6 id="part-of-speach">{Element.partOfSpeech}</h6> */}

  //       <Card.Body>
  //         <li>
  //           <p>{singleDefinition.definition}</p>
  //           <p id="example">{singleDefinition.example}</p>
  //           {/* {console.log("HELLO", singleDefinition.synonyms)} */}
  //           {/* <Button variant="primary" onClick={() => changeSynonymState()}>
  //           {" "}
  //           Synonyms
  //         </Button> */}
  //           {/* <Button variant="primary" onClick={() => printSynonyms(singleDefinition.synonyms)}> Synonyms</Button>
  //         {console.log(toggle)} */}
  //           <div id="synonyms"></div>
  //           {/* <Button variant="primary" onClick={() => printSynonyms(singleDefinition.synonyms)}> Synonyms</Button> */}
  //           {/* onClick={(e) => {printSynonyms(e,singleDefinition.synonyms)}} */}

  //           {/* <ButtonGroup aria-label="First group"> */}

  //           {/* </ButtonGroup> */}
  //         </li>
  //       </Card.Body>
  //     </div>
  //   ));
  // };

  return (
    <div className="urban-card">
      {/* <Container fluid> */}
      <Router>
        <Col>
          <Card>
            <Card.Header>
              <Nav variant="pills" defaultActiveKey="/Urban">
                <Nav.Item>
                  <Nav.Link href="/Urban">
                    <Link to="/Urban">definitions</Link>
                  </Nav.Link>
                </Nav.Item>
                {/* //* Creates the parts of speech tabs for the cards */}

                {printTabs()}
              </Nav>
            </Card.Header>
            <div className="urban-card-header">
              <Card.Header>
                <h1>
                  {/* {urbanData[0].word.substring(0, 1).toUpperCase() +
                    urbanData[0].word.substring(1)} */}
                     {apiContextData[0].googleData[0].word.substring(0, 1).toUpperCase() +
                  apiContextData[0].googleData[0].word.substring(1)}
                    
                    
                </h1>
              </Card.Header>
            </div>

            <Row>
              <Col className="urban-background">
                {/* <Card>
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
              <Card.Body> */}
                <Switch>
                  {/* <Route path="/adjective">
                {googleData.meanings ? <MainDictionaryCard /> : null}
                <ol>{googleData ? printMeaningTab("adjective") : null}</ol>
              </Route>

              <Route path="/transitive verb">
                {allApiData[1].urbanData ? <UrbanMainCard /> : null}
                <ol>{googleData ? printMeaningTab("transitive verb") : null}</ol>
              </Route>
              <Route path="/noun">
                {allApiData[1].urbanData ? <UrbanMainCard /> : null}
                <ol>{googleData ? printMeaningTab("noun") : null}</ol>
              </Route> */}

                  <Route path="/Urban">
                    {/* {allApiData[1].urbanData ? <Compare/> : null} */}

                    {/*//!!Stuff I need for urban card*/}
                    <div id="line-border-urban">
                      <ol className="custom">{printMeaning()}</ol>
                    </div>
                    {/* {urbanData ? printMeaning() : null} */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    {/* </Card.Body>
            </Card>*/}
                  </Route>
                  <div id="line-border-urban">
                  <div id="urban-background-comp">{createPaths()}</div>
                  </div>
                  <Route path="/">
                    {/* {allApiData[0].googleData ? <MainDictionaryCard /> : null} */}

                    {/* {googleData ? printMeaning() : null} */}
                  </Route>
                  {/* <DictionaryCard/> */}
                </Switch>
              </Col>
            </Row>
          </Card>
          {/* </Container> */}
        </Col>
      </Router>
    </div>
  );
};

export default UrbanMainCard;
