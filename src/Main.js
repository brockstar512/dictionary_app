import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import DictionaryList from "./DictionaryList"
import Definition from "./Definition"

function Main(props){
    console.log("here is what props is passing in MAIN", props.wordData)
    console.log("Main has components. Somehow its beeing passed to definition")
    return (<div>
    <Switch>
    
     <Route exact path ="/" component ={DictionaryList} />
     <Route 
        path ="/definition" 
        render={() => <Definition wordData={props.wordData}/>}
     />
    </Switch>
   
      {/* <DictionaryList />
    <Definition wordData={props.wordData}/> */}
    
    </div>
    )
}

export default Main
// render={(props) => <Definition wordData={props.wordData}{...props}/>}

//when using route use compnent ={} when you are not passing props
//but use render when you are passing props


//ADD MVP THESARUS AND NOUNS VERBS WHAT HAVE YOU
//AND ADD IF NOT IN DICTIONARY RENDER WE DONT HAVE THAT WORD 



//terinary function if word data is test retun dictionary list 
//else return def
//make go to search back to test
//TWO PARTS
//TERINARY OF WHAT TO SHOW
//RESET FUNCTION
//maybe make a function that if the word is test dont show
//if this return this if this return that