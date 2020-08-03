import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import xmlToJson from "./XmlToJson";
import WordSearchBar from "./WordSearchBar.js"
// import { createContext } from 'react';
import WordContext from './contexts/WordContext';
import AppNavBar from './AppNavBar'
import DictionaryCard from './DictionaryCard'
import ApiContext from './contexts/ApiContext';




const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

 function ApiCall()  {
  //
  //! ─── STATES ─────────────────────────────────────────────────────────────────────
  //
  const [urbanDef, setUrbanDef] = useState(null);
  const [spellCheck, setSpellCheckData] = useState(null);
  const [googleDef, setGoogleDef] = useState(null);
  const [acronym, setAcronym] = useState(null);
  const [similarWords, setSimilarWords] = useState(null);
  const [quote, setQuote] = useState(null);
  const [allData2,setAllData] = useState(null)
  //
  //! ─── VARIABLES ──────────────────────────────────────────────────────────────────
  
  
  
  
//! ─── Context ──────────────────────────────────────────────────────────────────
  
// console.log(contextData.WordContext)
  // let word = contextData.WordContext
  const contextData = useContext(WordContext);
   let wordtemp = contextData.wordContext
  // let word = `${wordtemp}`
  // let word = props.word
  let word = contextData.wordContext
  console.error("this is the word searched",word)

  const apiContextData = useContext(ApiContext);

  

  //
  //! ─── URBAN DICTIONARY API ───────────────────────────────────────────────────────
  //
  async function getUrbanDef() {
    try {
      axios({
        method: "GET",
        url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host":
            "mashape-community-urban-dictionary.p.rapidapi.com",
          "x-rapidapi-key":`${API_KEY}`,
          useQueryString: true,
        },
        params: {
          term: word ,
        },
      }).then((response) => {
        console.log(response);
        setUrbanDef(response.data);
        
      });
    } catch (error) {
      console.error("Urban dictionary api is not working:", error.message);
    }
  }

  // //
  // //! ─── SPELL CHECK API ────────────────────────────────────────────────────────────
  // //
  // async function getSpellCheck() {
  //   try {
  //     axios({
  //       method: "GET",
  //       url: "https://montanaflynn-spellcheck.p.rapidapi.com/check/",
  //       headers: {
  //         "content-type": "application/octet-stream",
  //         "x-rapidapi-host": "montanaflynn-spellcheck.p.rapidapi.com",
  //         "x-rapidapi-key": `${API_KEY}`,
  //         useQueryString: true,
  //       },
  //       params: {
  //         text: word, //! spell checked text
  //       },
  //     })
  //       .then((response) => {
  //         console.log(response);
  //         setSpellCheckData(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.error("Spell check api is not working:", error.message);
  //   }
  // }

  //
  //! ─── GOOGLE  DICTIONARY API ─────────────────────────────────────────────────────
  //
  async function getGoogleDef() {
    try {
      axios({
        method: "GET",
        url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      })
        .then((response) => {
          console.log(response);
          setGoogleDef(response.data);
          // apiContextData.setApiData(apiContextData.ApiData[0])
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("google dictionary api is not working:", error.message);
    }
  }
  //
  //! ─── ACRONYM DICTIONARY API (XML, can't convert to JSON) ─────────────────────────────────────────────────────
  //
  async function getAcronym() {
    try {
      await axios({
        method: "GET",
        url: "http://acronyms.silmaril.ie/cgi-bin/xaa?api",
      })
        .then((response) => {
          console.log(response);
          setAcronym(response.data);
          // apiContextData.setApiData(apiContextData.ApiData[1])
          
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Acronym Api", error.message);
    }
  }

  //
  //! ─── SIMILAR WORDS API ─────────────────────────────────────────────────────
  //

  async function getSimilarWords() {
    try {
      await axios({
        "method":"GET",
        "url":"http://similarwords.p.rapidapi.com/moar",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"similarwords.p.rapidapi.com",
        "x-rapidapi-key":`${API_KEY}`,
        "useQueryString":"hello"
        }
        })
        .then((response) => {
          console.log(response);
          setSimilarWords(response.data);
          apiContextData.setApiData(apiContextData.ApiData[2])
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Similar words api is not working", error.message);
    }
  }

  //
  //! ─── QUOTES API ─────────────────────────────────────────────────────────────────
  //
  async function getQuote() {
    try {
      axios({
        "method":"GET",
        "url":"https://quotes15.p.rapidapi.com/quotes/random/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"quotes15.p.rapidapi.com",
        "x-rapidapi-key":`${API_KEY}`,
        "useQueryString":true
        },"params":{
        "language_code":"en"
        }
        })
        .then((response) => {
          console.log(response);
          setQuote(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Quotes api is not working:", error.message);
    }
    
  }

    

  //
  //! ─── ASYNCHRONOUS FUNCTION CALLS ─────────────────────────────────────────────────

  async function get() {
    await Promise.all([getUrbanDef(), getGoogleDef(),getQuote(),]);
    setAllData()
   
  }
  
  useEffect(() => {
      get();
      
      
    // getQuote()
    // getSimilarWords() //* Key not working
    // getAcronym() //* Can't convert from xml
    //  getGoogleDef()
    // getSpellCheck();
    // getUrbanDef();
  }, []); // This bracket here is to prevent onUpdate behavior. So we're telling it to re-render when [] (nothing) updates

  console.log(urbanDef);
  // console.log(spellCheck);
  console.log(googleDef);
  // console.log(acronym)
  // console.log(jsonText)
  // console.log(similarWords)
  console.log(quote);
  let allData = [null,null,null]
  allData[0] = (urbanDef)
  allData[1]= (googleDef)

  allData[2] = (quote)
console.log(allData)
//  let ram = allData2 ? apiContextData.setApiData(allData):null
 console.log(apiContextData[0].googleData)
 console.log(apiContextData[1].urbanData)
 console.log(apiContextData[2].quoteData)
 

  return (
    <div>
      { 
        // null is a falsey value so if the data is there we render the first part before the ":"
        // but if we DON'T have any value yet from our API call then we render the string "Loading..."
        // data ? data.daily[0].clouds : "Loading..."
      }
      {/* {googleDef ? apiContextData.setApiData(googleDef):null} */}
      {googleDef ? apiContextData[0].setGoogleData(googleDef):null}
      {urbanDef ? apiContextData[1].setUrbanData(urbanDef):null}
      {quote ? apiContextData[2].setQuoteData(quote):null}
      
       {/* <AppNavBar/> */}
     
    </div>
  );
};

export default ApiCall