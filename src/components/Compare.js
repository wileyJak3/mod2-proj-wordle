import React, { useState, useContext } from "react";
import WordSearchBar from "./WordSearchBar";
import WordContext from "./contexts/WordContext";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import UrbanMainCard from "./UrbanMainCard";
import { BrowserRouter as Router, Switch, Route, Link } from react-router-dom";
import Compare from './Compare'
import './styles/nav-bar.css'

function AppNavbar() {
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
            <Nav></Nav>

            <Nav.Link>
                <Link to="/Urban">Urban</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link></Nav.Link>

              <Link to="/Dictionary">Dictionary</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {/* <WordContext.Provider value={{ wordContext, setWordContext }}> */}

              <WordSearchBar />
              {/* {wordContext ? <ApiCall word={wordContext} /> : "Loading..."} */}
              {/* </WordContext.Provider> */}
            </Nav>
           

            {/*//! Incomplete Component */}
            {/* <Nav></Nav>

            <Nav.Link>
                <Link to="/Compare">Compare</Link>
              </Nav.Link>
            </Nav> */}
            
          {/* </div> */}
        </Navbar>
        {/* {allApiData[1].urbanData ? <UrbanMainCard />:null } */}
        <Switch>
          <Route path="/Dictionary"></Route>