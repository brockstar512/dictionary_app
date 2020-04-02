import React from 'react';
import './App.css';


function Definition (props){
console.log("this is props.wordData inside DEFINITION", props.wordData)
    const wordData = props.wordData[0]
    if(!wordData){
        //    console.log("props.wordData[0] =",wordData) 
        return <></>
    }
   
    const wordInfo = props.wordData.map( (word, index) => {
        if(index<=3){
            const defArray = word.shortdef.map((def,i) =>{
                return <ul>
                    <li>{`Definition ${i+1}: ${def}`}</li>
                </ul>
            })
            
        return <div key ={index} className ="speech">
            <div className ="innerWrapper">
            <p>{`Part of Speech: ${word.fl}`}</p>
                {defArray}
                </div>
                </div>
        }
        else{
            return <></>
        }
    })
    // const wordDefinition = wordData.shortdef.map( (word,index) => {
    //     // console.log("this is word", word)
    //     if(index<=2){
    //     return <ul key ={index}>
    //         <li>{`Definition ${index+1}: ${word}`}</li>
    //         </ul>
    //     }
    //     else{
    //         return <></>
    //     }
    // })
    // console.log("here is what we are defining in definition", props.wordData)
    // console.log("props.wordData[0] =",props.wordData[0] )
    // // console.log("dfgkdfj", wordDefinition)
    // console.log("props.wordData[0].shortdef =",props.wordData[0].shortdef[0])
    return (<>
   
    <div className="definition">
        <h1 className ="title">Definition of {wordData.hwi.hw}</h1>
        {/* <div className ="def">{wordDefinition}</div> */}
        <div className ="sepDef">{wordInfo}</div>
    </div>

   
    </>
    )}
export default Definition