import React from "react";
import {
  Container,
  Row,
  ButtonGroup,
  Button,
  Nav,
  Card,
  Col,
} from "react-bootstrap";
import ApiContext from "./contexts/ApiContext";
import { useContext, useState } from "react";
import "./styles/main-card.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SwitchButton from "react-switch";
import "./styles/compare-card.css";

// Component wasn't complete, but it was usppose to display all the defintions available for urban dicitionary and google dictionary side by side on a single

let DictionaryCompareCard = () => {
  //
  //? ─── Context  ───────────────────────────────────────────────────────────────────────────
  const apiContextData = useContext(ApiContext);
  let googleData = apiContextData[0].googleData[0];

  // console.error("This is the google data", googleData);
  //? ────────────────────────────────────────────────────────────────────────────────

  //? ─── States  ───────────────────────────────────────────────────────────────────────────
  const [synonymState, setSynonymState] = useState(false);
  const [checked, setChecked] = useState(true);
  // const [divNumber, setDivNumbe] = useState(false);
  //? ────────────────────────────────────────────────────────────────────────────────

  // copy of prior print meanings funciton

  //* Creates the overview cards
  //~ Notes: None of the information is specific to the file, this could be a component
  let printMeaning = () => {
    return googleData.meanings.map((Element) => (
      <li>
        <div>
          <h6 id="part-of-speach">{Element.partOfSpeech}</h6>
          {console.log(Element,"element")}
          <ol>
            {/* {Element.definitions.map((definition) => ( */}
              <li>
                <p>{Element.definitions[0].definition}</p>
                <p id="example">{Element.definitions[0].example}</p>
               
                
                <div className ="synonyms-main-card">
                <Row>
                  {synonymState
                    ? printSynonyms2(Element.definitions[0].synonyms)
                    : null}
                </Row>
                </div>
                
              </li>
            {/* ))} */}
          </ol>
          {/* <div>
          {printDefinitions(Element.definitions)}
          </div> */}
        </div>
      </li>
    ));
  };

  // let printDefinitions = (definitions) => {
  //   return definitions.map((definition) => <p> {definition}</p>);
  // };

  let getPartOfSpeechIndex = (speechPart) => {
    for (let i = 0; i < googleData.meanings.length; i++) {
      if (googleData.meanings[i].partOfSpeech == speechPart) {
        return i;
      }
    }
  };

  //* Function that prints the multiple definitions under each part of speech tab
  let printMeaningTab = (speechPart) => {
    // return googleData.meanings[googleData.meanings.findIndex(speechPart)](
    return googleData.meanings[
      getPartOfSpeechIndex(speechPart)
    ].definitions.map((singleDefinition) => (
      <div>
        {/* console.error("element value",element) */}
        {/* <h6 id="part-of-speach">{Element.partOfSpeech}</h6> */}

        <Card.Body>
          <li>
            <p>{singleDefinition.definition}</p>
            <p id="example">{singleDefinition.example}</p>
            {/* {console.log("HELLO", singleDefinition.synonyms)} */}
            {/* <Button variant="primary" onClick={() => changeSynonymState()}>
            {" "}
            Synonyms
          </Button> */}
            {/* <Button variant="primary" onClick={() => printSynonyms(singleDefinition.synonyms)}> Synonyms</Button>
          {console.log(toggle)} */}
            <div id="synonyms"></div>
            {/* <Button variant="primary" onClick={() => printSynonyms(singleDefinition.synonyms)}> Synonyms</Button> */}
            {/* onClick={(e) => {printSynonyms(e,singleDefinition.synonyms)}} */}
            {console.log(synonymState)}

            {/* <ButtonGroup aria-label="First group"> */}
            <div id="synonym-btn-styling">
              <Row>
                {synonymState
                  ? printSynonyms2(singleDefinition.synonyms)
                  : null}
              </Row>
            </div>
            {/* </ButtonGroup> */}
          </li>
        </Card.Body>
      </div>
    ));
  };

  //! Unused function that renders in a unique fashion to the targeted Id, function not removed due to the uniqueness of it's construction (AKA posterity)
  // let printSynonyms = (synonymsArray) => {
  //   console.log("Synonyms Array", synonymsArray);
  //   const printSyns = synonymsArray.map((synonym) => (
  //     <div>
  //       {/* <p>{synonymsArray[0]}</p> */}
  //       {/* console.error("element value",element) */}
  //       {/* <h6 id="part-of-speach">{Element.partOfSpeech}</h6> */}
  //       <li>
  //         <p>{synonym}</p>
  //         {/* <p id="example">{Element.example}</p>
  //         <Button variant="primary" onClick >Synonyms</Button> */}
  //       </li>
  //     </div>
  //   ));
  //   ReactDOM.render(printSyns, document.getElementById("synonyms"));
  // };

  let printSynonyms2 = (synonymsArray) => {
    console.log("Synonyms Array", synonymsArray);
    return synonymsArray
      ? synonymsArray.map((synonym) => (
          <div>
            {/* <p>{synonymsArray[0]}</p> */}
            {/* console.error("element value",element) */}
            {/* <h6 id="part-of-speach">{Element.partOfSpeech}</h6> */}
            <Col>
              <Button variant="light">{synonym}</Button>
            </Col>

            {/* <li>
              <p>{synonym}</p> */}
            {/* <p id="example">{Element.example}</p>
          <Button variant="primary" onClick >Synonyms</Button> */}
            {/* </li> */}
          </div>
        ))
      : null;
  };

  function handleChange(checked) {
    setChecked(!checked);
    setSynonymState(!synonymState);
  }

  //* Function that creates the router paths for the card links and renders the switch to show synonyms
  let createPaths = () => {
    return googleData.meanings.map((meaning) => (
      <Route path={`/${meaning.partOfSpeech}`}>
        {/* {console.log("meaning",meaning.partOfSpeech)} */}
        {/* {googleData.meanings ? <MainDictionaryCard /> : null} */}

        {/* <Button variant="primary" onClick={() => changeSynonymState()}>
          {" "}
          Synonyms
        </Button> */}

        {/* //~ First styling set up */}
        <Card className="meaning-tab-cards">
          <Row>
            <Col>
              <ol>
                {googleData ? printMeaningTab(meaning.partOfSpeech) : null}
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

  // A function tht dynamically creates card tabs base on the parts of speech received for them api
  let printTabs = () => {
    // console.log("meanings",googleData.meanings)
    return googleData.meanings.map((Element) => (
      <div>
        <Nav.Item>
          <Nav.Link href={`#${Element.partOfSpeech}`}>
            <Link to={Element.partOfSpeech}>{Element.partOfSpeech}</Link>
          </Nav.Link>
        </Nav.Item>
      </div>
    ));
  };

  // a fucntion thats suppose to dynamically get the information related to the dynamically created tabs (doesnt work)

  return (
    <div className="dictionary-card">
      <Router>
        <Col>
          <Card>
            <Card.Header>
              <Nav variant="pills" defaultActiveKey="#overview">
                <Nav.Item>
                  <Nav.Link href="#overview">
                    <Link to="/Compare">overview</Link>
                  </Nav.Link>
                </Nav.Item>
                {/* //* Creates the parts of speech tabs for the cards */}
                {printTabs()}
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <div className="card-btm-border">
                  
                  <Row >
                    <Col>
                    <Row lg={1} xl={1}>
                      <Col>
                        <div className="comp-card">
                        {/* <Row> */}
                            <h2 id="title-header">{`${googleData.word}`}</h2>
                            {/* </Row> */}
                            {/* <Row>
                            <p id="phonetic-comp">{`[${googleData.phonetics[0].text}]`}</p>
                            </Row> */}
                        </div>
                      </Col>
                      </Row>

                      {/*//* The string literal for the phonetics of the searched word */}
                    </Col>
                    <Col>
                      <div className="switch-button-location">
                        <div className="switch-button">
                          <div>
                            <label>
                              <SwitchButton
                                onColor="#343A40"
                                onHandleColor="#FFFFF"
                                offColor="#343A40"
                                offHandleColor="#FFFFF"
                                onChange={(e) => handleChange(e)}
                                checked={!checked}
                              />
                            </label>
                          </div>
                          <div>
                            <span id="display-synonym-text">
                              Display Synonyms
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Title>
              <Card.Text>
                {/* {googleData ? printMeaning() : null} */}

                {/* <div className="main-card-inner">
                  <h6 id ="part-of-speach">{googleData.meanings[0].partOfSpeech}</h6>
                  <p>{googleData.meanings[0].definitions[0].definition}</p>
                  <p id ="example">{googleData.meanings[0].definitions[0].example}</p>
                  </div> */}
              </Card.Text>
            </Card.Body>
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
              {createPaths()}

              <Route path="/Compare">
                {/* {allApiData[1].urbanData ? <Compare/> : null} */}
                <div className="main-card-list">
                  <ul>
                    <Card.Text>{googleData ? printMeaning() : null}</Card.Text>
                  </ul>
                </div>
              </Route>

              <Route path="/">
                {/* {allApiData[0].googleData ? <MainDictionaryCard /> : null} */}
                {/* {googleData ? printMeaning() : null} */}
              </Route>
              {/* <DictionaryCard/> */}
            </Switch>
          </Card>
        </Col>
      </Router>
    </div>
  );
};

export default DictionaryCompareCard;
