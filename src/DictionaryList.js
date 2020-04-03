import React, { useContext, useState } from 'react';
import { Submit } from "./App"
import { Redirect } from 'react-router-dom'
import "./button.scss"



// import ReactDOM from 'react-dom';

function DictionaryList() {
    const submit = useContext(Submit)
    console.log("here the ocntext var is on list ", submit)
    const [wordQ, setSearchReset] = useState("");
    const [redirect, setRedirect] = useState(false)

    const handleChange = e => {
        const searching = e.target.value;
        setSearchReset(searching);
    };


    // console.log("HERE IS PROPS IN LIST. HISTORY IS SUPPOSE TO SHOW UP",props)
    const handleSubmit = e => {
        e.preventDefault();
        submit(wordQ)
        setSearchReset("")
        //dont know if i'll need^
        // return <Redirect to="/definition" />
        setRedirect(true)
    }
    if (!redirect) {
        return <div className="body"> 
        <div className="container">
        <h1>Search for a Definition</h1>
            <form onSubmit={handleSubmit}>
                {/* <label> Search for you word here</label> */}
                <input
                    id="wordQ"
                    type="text"
                    value={wordQ}
                    onChange={handleChange}
                    placeholder="Search for word"
                />
                <div className="search">
                <input type="submit" value="Define" /></div>
            </form>
            </div>
        </div>
        //on submit link to?
    }
    else{
        return <Redirect to="/definition" />
    }
}

export default DictionaryList