import React from "react";
//add word. add definition

function Definition(props) {
  let notHere = false;
  // console.log("this is props.wordData inside DEFINITION", props.wordData);
  const wordData = props.wordData[0];
  if (!wordData) {
    //    console.log("props.wordData[0] =",wordData)
    return <></>;
  }
  // || wordData.length===0)

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
