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
mport MainDictionaryCard from "./MainDictionaryCard";
import UrbanMainCard from "./UrbanMainCard";
import { BrowserRouter as Router, Switch, Route, Link } from 
react-router-dom";
import Compare from './Compare'
import './styles/nav-bar.css'

