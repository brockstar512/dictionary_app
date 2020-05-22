import React,{useState} from "react";
//add word. add definition
import {AddByDef, create} from './services/api-helper'

function Definition(props) {
const [definitionAdd, setDefinitionAdd] = useState()
const[presID, setPresID] = useState()

  let notHere = false;
  
  const wordData = props.wordData[0];
  if (!wordData) {
   
    return <></>;
  }else{
    
  }



const handleAddData =async(e) =>{

 console.log('here is the shortdef.',e.shortdef)
//  console.log('here is the spread opertaor.',[...e.shortdef])
 
  const json = await create(
    {
    "word": e.meta.stems[0],
    "notes":"",
    "definitions":[] }
    )
  setPresID(json._id)
  let idPassingBy =json._id

  console.log("THIS IS THE ID", json. _id)
  console.log("THIS IS THE ID WITHOUT A SPACE", json._id)
  console.log("COULD TRY PASSING THIS", e.shortdef[0])
  let mostCommonDef=e.shortdef[0]
  let details = e
  addDefinition(idPassingBy, mostCommonDef,details)


}

const addDefinition =async(WordId,d,deets)=>{
  console.log("HERE IS E", d)
  console.log('HERE IS id', WordId)
  //if i can manage to debug it pass it through wil a large array
  const defjson = await AddByDef( WordId,{
    "def": d,
    "partOfSpeech":deets.fl,
    "sentence": ""
  })
  console.log("here is the definition json ",defjson)
  }


  const wordInfo = props.wordData.map((word, index) => {
    if (word.shortdef === undefined) {
      notHere = true;
    } else if (index <= 3) {
      
      const defArray = word.shortdef.map((def, i) => {
       
        return (
          <ul key={i}>
            <li>{`Definition ${i + 1}: ${def}`}</li>
          </ul>
        );
      });
      return (
        <div key={index} className="speech">
          <div className="innerWrapper">
            <p>{`Part of Speech: ${word.fl}`}</p>
            {defArray}
            <button className ="addWord"  onClick={()=>handleAddData(wordData)}  >Add to List</button>
          
          </div>
        </div>
      );
    } else {
      return <></>;
      
    }
  });
  if (!notHere) {
    return (
      <>
        <div className="definition">
          <h1 className="title">Definition of {wordData.hwi.hw}</h1>
          {/* <div className ="def">{wordDefinition}</div> */}
          <div className="sepDef">{wordInfo}</div>
        </div>
      </>
    );
  } else {
    return (
      <div className="definition">
        <h1 className="title">Definition of word is not here</h1>
        {/* <div className ="def">{wordDefinition}</div> */}
        <div className="sepDef">We're sorry.</div>
      </div>
    );
  }
}

export default Definition;
