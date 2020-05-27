import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
export const Submit = React.createContext();

function App() {

  const [searchData, setSearchData] = useState({});
  const [search, setSearch] = useState("dictionary");

  const key = `023e133d-53db-4dad-94d5-5139255f9b6e`;
  const dictionaryUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/${search}?key=${key}`;
  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(dictionaryUrl);
      const json = await res.json();
      setSearchData(json);
    };
    makeApiCall();
  }, [search]);
  const handleSubmit = async title => {
    setSearch(title);
  };

  return (
    <div className="App">
      <Header />
      <Submit.Provider value={handleSubmit}>
        <Main wordData={searchData} />
      </Submit.Provider>
      <Footer />
    </div>
  );
}

export default App;
