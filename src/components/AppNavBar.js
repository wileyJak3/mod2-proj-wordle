import React, { useState, useContext } from "react";
import WordSearchBar from "./WordSearchBar";
import WordContext from "./contexts/WordContext";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ApiCall from "./ApiCall";
import ApiContext from "./contexts/ApiContext";
import DictionaryCard from "./DictionaryCard";
import MainDictionaryCard from "./MainDictionaryCard";
import UrbanMainCard from "./UrbanMainCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DictionaryCompareCard from './DictionaryCompareCard'
import './styles/nav-bar.css'
import ComparePage from "./ComparePage";


// This functionis what's passed into the app.js and basically the hub of the entire program


let AppNavbar = () => {
  //
  //! ─── CONTEXT ────────────────────────────────────────────────────────────────────
  const allApiData = useContext(ApiContext);
  const wordData = useContext(WordContext);
  // const [googleData,urbanData,quoteData] = allApiData
  console.log(allApiData[0].googleData);
  console.log(allApiData[1].urbanData);
  console.log(allApiData[2].quoteData);

  //! ─── STATE ──────────────────────────────────────────────────────────────────────
  //

  const [wordContext, setWordContext] = useState("");

  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark">
        <div>
            <Navbar.Brand><Link to="/">Wordle</Link></Navbar.Brand>
          </div>
         
          {/* <div className="nav-bar-flex"> */}
            <Nav>
              <Nav.Link>
                <Link to="/Urban">Urban</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to="/Dictionary">Dictionary</Link>
              </Nav.Link>
            </Nav>
            {/*//! Incomplete Component */}
            <Nav>
              <Nav.Link>
                <Link to="/Compare">Compare</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {/* <WordContext.Provider value={{ wordContext, setWordContext }}> */}
              <WordSearchBar />
              {/* {wordContext ? <ApiCall word={wordContext} /> : "Loading..."} */}
              {/* </WordContext.Provider> */}
            </Nav>
           

            
            
          {/* </div> */}
        </Navbar>
        {/* {allApiData[1].urbanData ? <UrbanMainCard />:null } */}
        <Switch>
          <Route path="/Dictionary">
            {allApiData[0].googleData ? <MainDictionaryCard /> : null}
          </Route>

          <Route path="/Urban">
            {allApiData[1].urbanData ? <UrbanMainCard /> : null}
          </Route>

          <Route path="/Compare">
            {/* {allApiData[1].urbanData ? <DictionaryCompareCard/> : null} */}
            {allApiData[1].urbanData ? <ComparePage/> : null}
          </Route>

          <Route path="/">
          { wordData.wordContext ? <h1 id ="wordSearch">{wordData.wordContext}</h1>:null}
            {allApiData[2].quoteData ? <h1 id ="quote">{`Quote: ${allApiData[2].quoteData.content}`}</h1>:<h1 id = "intro" >Wordle</h1>}
          </Route>
          {/* <DictionaryCard/> */}
        </Switch>
      </Router>
    </div>
    // <div className="nav-bar-flex">
    //   <WordContext.Provider value={{ wordContext, setWordContext }}>
    //       <WordSearchBar/>
    //  </WordContext.Provider>
    // </div>
  );
}

export default AppNavbar;
