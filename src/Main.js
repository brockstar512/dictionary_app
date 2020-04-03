import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DictionaryList from "./DictionaryList";
import Definition from "./Definition";

function Main(props) {
  console.log("here is what props is passing in MAIN", props.wordData);
  console.log("Main has components. Somehow its beeing passed to definition");
  return (
    <div>
      <Switch>
        <Route exact path="/" component={DictionaryList} />
        <Route
          path="/definition"
          render={() => <Definition wordData={props.wordData} />}
        />
        <Redirect to="/" />
      </Switch>

      {/* <DictionaryList />
    <Definition wordData={props.wordData}/> */}
    </div>
  );
}

export default Main;

