import React, { useContext, useState } from "react";
import { Submit } from "./App";
import { Redirect } from "react-router-dom";
import "./button.scss";


function DictionaryList() {
  const submit = useContext(Submit);
  console.log("here the ocntext var is on list ", submit);
  const [wordQ, setSearchReset] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleChange = e => {
    const searching = e.target.value;
    setSearchReset(searching);
  };
  const handleSubmit = e => {
    e.preventDefault();
    submit(wordQ);
    setSearchReset("");

    setRedirect(true);
  };
  if (!redirect) {
    return (
      <div className="body">
        <div className="container">
          <h1>Search for a Definition</h1>
          <form onSubmit={handleSubmit}>
            <input
              id="wordQ"
              type="text"
              value={wordQ}
              onChange={handleChange}
              placeholder="Search for word"
            />
            <div className="search">
              <input type="submit" value="Define" />
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/definition" />;
  }
}

export default DictionaryList;
//512 422 4259