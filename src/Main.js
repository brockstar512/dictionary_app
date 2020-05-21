import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DictionaryList from "./DictionaryList";
import Definition from "./Definition";
import FavWord from "./FavWord"

function Main(props) {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={DictionaryList} />
        <Route
          path="/definition"
          render={() => <Definition wordData={props.wordData} />}
        />
        <Route path ="/wordslist" component ={FavWord}/>
        <Redirect to="/" />
      </Switch>

      {/* <DictionaryList />
    <Definition wordData={props.wordData}/> */}
    </div>
  );
}

export default Main;

