import React , {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {getAll} from './services/api-helper'


function Header() {

  const [words, setWords] = useState([])
  const[isLoading, setIsLoading] = useState(true)


  useEffect(()=>{
    const makeAPICall = async () => {
    const resp = await getAll()
    setWords(resp)
    setIsLoading(false)
    }
    makeAPICall()
    },[words])

    let amount = words.length >= 1 ? `(${words.length})` : ""

  return (
    <div className="header">
      <Link to="/">Search</Link>
  <Link to ="/wordslist">Word List <span className ="num">{amount}</span></Link>
      
    </div>
  );
}
export default Header;
