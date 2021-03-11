import React, { useState, useContext } from "react";
import axios from "axios";
import wordContext from "./contexts/WordContext";
import ApiCall from "./ApiCall";
import {Button,Spinner} from 'react-bootstrap'


function WordSearchBar() {
  const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
  // const [name, setName] = useState("");
  const [tempName, setTempName] = React.useState("");
  const [spellCheck, setSpellCheckData] = useState(null);
  const dataContext = useContext(wordContext);
  const [toggle, setToggle] = useState(false);
  

  //
  //! ─── SPELL CHECK API ────────────────────────────────────────────────────────────
  //

  let word = dataContext.wordContext;
  async function getSpellCheck() {
    try {
      axios({
        method: "GET",
        url: "https://montanaflynn-spellcheck.p.rapidapi.com/check/",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "montanaflynn-spellcheck.p.rapidapi.com",
          "x-rapidapi-key": `${API_KEY}`,
          useQueryString: true,
        },
        params: {
          text: word, //! spell checked text
        },
      })
        .then((response) => {
          console.log(response);
          setSpellCheckData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Spell check api is not working:", error.message);
    }
  }


// this funtion allows the display fo the words typed by the user as they are type (removed twoards the end due to time constrains)

  let handleChange =(event)=> {
    // console.log("changed");
    console.log(event.target.value);
    //* setName(event.target.value)
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    
    //~ challenge
    setTempName(event.target.value);
  }

  let generateDef =(name)=> {
    return name ? <ApiCall word={word} /> : <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>;
    // {console.log("this is the current name",{name})}
  }

  // when your writing a fucntion can simply use the variable name, don't need the curly braces. In fact, if we use the curly braces we will set our variable to a js object and not a value.
  
  
  
  // This function toggles a state value for conditonal rendering
  let toggleSubmitValue =()=> {
    setToggle(!toggle);
  }


  
  // Funtion sends the value to the apicall file to be queried

  let SubmitValue = () =>{
    // setName(tempName);
    // console.log(tempName);
    // console.log(name);
    console.log("clicked");
    dataContext.setWordContext(null);
    toggleSubmitValue();
  }


  // function resets the search bar
  let  SubmitValue2 =() => {
    dataContext.setWordContext(tempName);
    toggleSubmitValue();
    setTempName("");
  }

  // function reset(){
  //   dataContext.setWordContext(null);
  // }

  // function both (){
  //   submitValue()
  //   generateDef()
  // }

  return (

    
    <div className="nav-bar-flex">
      {/* <div>{tempName ? <h6>Word: {tempName} </h6> : <h6>{word}</h6>}</div> */}
      <div>
        
        {toggle ? null : (
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter a word to search"
            //*   value = {name} // set value normally handled by input to state variable, 1 source of truth.

            //~   challenge

            value={tempName}
          />
        )}
        {/* {toggle ?<button onClick={SubmitValue}>Search</button>: <button onClick={SubmitValue2}>Submit</button>} */}
        <Button onClick={SubmitValue} variant="light">Search</Button> 
        {/* <button onClick={SubmitValue}>Search</button> */}
        {toggle ? SubmitValue2() : null}
      </div>
      {generateDef(word)}
    </div>
  );
}

export default WordSearchBar;

// Notes: when your input element triggers the function that's stored in the on change it also passes over an object and that object corresponds to the event that triggered the onchange. We can log various things related with the event

// In html the elements themselves are responsible for their own this.state. For example we might remember there is attribute called value and it corresponds with the input, in html value noramlly handle by input property and sets it to whats being typed, but in react we should set the value to the variable that comes from event.target.value. one single source of truth. This is called a controlled component (link in resources)
