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