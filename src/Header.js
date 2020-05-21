import React , {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {getAll} from './services/api-helper'


function Header() {
  //pull in get all and render the amount that is in it
  const [words, setWords] = useState([])
  const[isLoading, setIsLoading] = useState(true)
 console.log("here is get all",words.length)

  useEffect(()=>{
    const makeAPICall = async () => {
    const resp = await getAll()
    setWords(resp)
    setIsLoading(false)
    }
    makeAPICall()
    },[])

    let amount = words.length >= 1 ? `(${words.length})` : ""

  return (
    <div className="header">
      {/* <span>Dictionary</span> */}
      <Link to="/">Search</Link>
  <Link to ="/wordslist">Word List <span className ="num">{amount}</span></Link>
      
    </div>
  );
}
export default Header;
