import React, {useEffect, useState} from 'react'
import {getAll, update, removeWord, removeDef} from './services/api-helper'
import './style.css' 
import './fav.css'


//get all and delete //update

// AddByDef
// getByName
// removeDef
// removeWord
// update
// create
// getAll


const FavWord = ()=>{
    const [words, setWords] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[info, setInfo] = useState(false)
//    console.log("here is get all in fav word list",words)

   useEffect(()=>{
    const makeAPICall = async () => {
    const resp = await getAll()
    setWords(resp)
    setIsLoading(false)
    }
    makeAPICall()
    },[])
    // onClick ={handleShowInfo}
    const handleShowInfo = ()=>{
        setInfo(!info)
    }

    const handleRemoveWord = async(id)=>{
        const json = await removeWord(id)
        const otherWords = words.filter(singleWord=> singleWord._id !== id)
        setWords(otherWords)
    }
   
    const displayList = words.map((word, index)=>{
        const definitions = word.definitions.map((d,i)=>{
            // console.log("The is word that I need id to delte",word)
            return <ul key={index} className>
                <p>Part Of Speech: {d.partOfSpeech}</p>
                <li>Definition {i+1}: {d.def}</li>
                <li> Sentence: {d.sentence}</li>
                </ul>
                
        })
        return (<div className ="speech"><div className="innerWrapper">
        <div className="a">{word.word.charAt(0).toUpperCase()+ word.word.slice(1)}</div>
        <button className ="removeItem" onClick={()=>handleRemoveWord(word._id)}>remove Word</button>
         <span className ="info">{definitions}</span>
        </div></div>)
    })

    return(
    <div className ="wordContainer">
        <h1 className = "wordList">Word List</h1>
        {/* underline in red */}
        {/* <h4>Tap word to see information you have saved</h4> */}
        {!isLoading && displayList}
        
    </div>
    )
}
export default FavWord