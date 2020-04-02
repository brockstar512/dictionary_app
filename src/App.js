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
  //
  //
  //
  //https://developer.oxforddictionaries.com/admin/applications/1409619575533
  // const baseUrl =	`https://od-api.oxforddictionaries.com/api/v2`
  // const id =`d7c3808d`
  // const key =`21723442e8017fa22e2a58f1ac2f4c53`
  //https://od-api.oxforddictionaries.com/api/v2
  ///api/v2/entries/{source_lang}/{word_id}:

  // makeApiCall()
  // fetch(dictionaryUrl).then(function(res){
  //   return res.json()
  // }).then(function (obj) {
  //   console.log("here is what the fetch retrieved.",obj)
  // })
 
  const [searchData, setSearchData] = useState({});
  const [search, setSearch] = useState("test");
  console.log("This is searchData in APP", searchData)

// const oxford = `	https://od-api.oxforddictionaries.com/api/v2`
// const id = `d7c3808d`
// const key = 	`21723442e8017fa22e2a58f1ac2f4c53`
// cont lang = `en-us`
//IF I WANT TO SWITCH IT BACK TO DICTIONARY I WOULD SEND IT THROUGH THIS LINKN
// const dictionaryUrl = `https://ghibliapi.herokuapp.com/films`

  // //WHY DOES THIS NOT WORK - because the key does not need curly brackets

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
    // makeApiCall()
    //*** below is correct I just haev to manuelly enter the word it grabs
    //BUT THIS DOES
    // const key =`023e133d-53db-4dad-94d5-5139255f9b6e`
    // // const dictionaryUrl = `https://www.dictionaryapi.com/api/v3/references/sd2/json/school?key=${key}`  
    // const dictionaryUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/school?key=023e133d-53db-4dad-94d5-5139255f9b6e`  
    // async function  makeApiCall(){
    //     const res = await fetch(dictionaryUrl)
    //     const json = await res.json()
    //     console.log("here is the json during the fetch",json)
    //   }
      //I COULDNT PASS THE FUNCTION WITH CONTEXT IS THERE A MORE PROPER WAY
      //TO SEND DATA. When I would try to send the function it would 
      //send the function not the return value
      // let apiVar = makeApiCall()
      // console.log("this is the api Var from app", apiVar)
 

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
