import React,{useState} from "react";
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

  const json = await create(
    {
    "word": e.meta.stems[0],
    "notes":"",
    "definitions":[] }
    )
  setPresID(json._id)
  let idPassingBy =json._id
  let arrayOfDef = e.shortdef
  let details = e

  addDefinition(idPassingBy, arrayOfDef,details)
}

const addDefinition =async(WordId,d,deets)=>{

  const defjson = await AddByDef( WordId,{
    "def": [...d],
    "partOfSpeech":deets.fl,
    "sentence": ""
  })
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
            <button className ="addWord"  onClick={()=>handleAddData(word)}  >Add to List</button>
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
          <div className="sepDef">{wordInfo}</div>
        </div>
      </>
    );
  } else {
    return (
      <div className="definition">
        <h1 className="title">Definition of word is not here</h1>
        <div className="sepDef">We're sorry.</div>
      </div>
    );
  }
}

export default Definition;
