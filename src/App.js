import React, { useState, useEffect } from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
export const Submit = React.createContext()
// export const DataRequest = React.createContext()



function App() {
  //
  //
  // const key =`{023e133d-53db-4dad-94d5-5139255f9b6e}`
  // const dictionaryUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=${key}`
 
  //https://developer.oxforddictionaries.com/admin/applications/1409619575533
  // const baseUrl =	`https://od-api.oxforddictionaries.com/api/v2`
  // const id =`d7c3808d`
  // const key =`21723442e8017fa22e2a58f1ac2f4c53`
  //https://od-api.oxforddictionaries.com/api/v2
  ///api/v2/entries/{source_lang}/{word_id}:
  // const oxford = `	https://od-api.oxforddictionaries.com/api/v2`
// const id = `d7c3808d`
// const key = 	`21723442e8017fa22e2a58f1ac2f4c53`
// cont lang = `en-us`

 
  const [searchData, setSearchData] = useState({});
  const [search, setSearch] = useState("test");
  console.log("This is searchData in APP", searchData)




    const key =`023e133d-53db-4dad-94d5-5139255f9b6e`
    const dictionaryUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/${search}?key=${key}`  
    useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(dictionaryUrl)
      const json = await res.json()
      console.log("here is the json during the fetch",json)
      setSearchData(json);
    }
    makeApiCall();
  }, [search]);
     
    const handleSubmit =async title => {
      setSearch(title)
    }

  return (
    <div className="App">
      <Header /> 
      <Submit.Provider value={handleSubmit}>
      <Main 
      wordData = {searchData}
      />
      </Submit.Provider>
      <Footer />
    
    </div>
  );
}

export default App;
