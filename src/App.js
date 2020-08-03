import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import ApiCall from "./components/ApiCall";
import WordSearchBar from "./components/WordSearchBar";

import WordContext from "./components/contexts/WordContext";
import AppNavbar from "./components/AppNavBar";
// import AppNavBar from './components/AppNavBar'
import ApiContext from "./components/contexts/ApiContext";

function App() {
  const [wordContext, setWordContext] = useState("");
  // const [ApiData, setApiData] = useState(null);
  const [googleData, setGoogleData] = useState(null);
  const [urbanData, setUrbanData] = useState(null);
  const [quoteData, setQuoteData] = useState(null);

  return (
    <div className="App">
      {/* <WordSearchBar/> */}
      {/* <ApiCall/> */}
      <WordContext.Provider value={{ wordContext, setWordContext }}></WordContext.Provider>
      {/* <ApiContext.Provider value={{ ApiData, setApiData }}> */}
      <ApiContext.Provider value={[{ googleData, setGoogleData },{ urbanData, setUrbanDat
        <AppNavbar />
        </ApiContext.Provider>
      </WordContext.Provider>
    </div>
  );
}