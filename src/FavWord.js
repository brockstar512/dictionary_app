import React, {useEffect, useState} from 'react'
import {getAll, update, removeWord, removeDef} from './services/api-helper'
import './style.css' 
import './fav.css'





const FavWord = ()=>{
    const [words, setWords] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[info, setInfo] = useState(false)


   useEffect(()=>{
    const makeAPICall = async () => {
    const resp = await getAll()
    setWords(resp)
    setIsLoading(false)
    }
    makeAPICall()
    },[])


    const handleRemoveWord = async(id,name)=>{
        const result =window.confirm(`are you sure you want to remove ${name.word}?`)
        if(result){
        const json = await removeWord(id)
        const otherWords = words.filter(singleWord=> singleWord._id !== id)
        setWords(otherWords)}
        else{
            return
        }
    }
   
    const displayList = words.map((word, index)=>{
        const definitions = word.definitions.map((d,i)=>{
            const individualDef =d.def.map((ind, i)=>{
                return <div className="indDef">Definition {i+1}: {ind}</div>
            })
            
            return <ul key={index} >
                <p>Part Of Speech: {d.partOfSpeech}</p>
                <li> {individualDef}</li>
                </ul>
                
        })
        return (<div className ="speech"><div className="innerWrapper">
        <div className="a">{word.word.charAt(0).toUpperCase()+ word.word.slice(1)}</div>
        <button className ="removeItem" onClick={()=>handleRemoveWord(word._id,word)}>remove Word</button>
         <span className ="info">{definitions}</span>
        </div></div>)
    })

    return(
    <div className ="wordContainer">
        <h1 className = "wordList">Word List</h1>

        {!isLoading && displayList}
        
    </div>
    )
}
export default FavWord