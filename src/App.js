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
