import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ApiContext from "./contexts/ApiContext";
import { useContext } from "react";
import "./styles/main-card-urban.css";

function MainDictionCard() {
  const apiContextData = useContext(ApiContext);
  let urbanData = apiContextData[1].urbanData.list;
  urbanData = urbanData.splice(0, 2);

  console.error("This is the urban data", urbanData);