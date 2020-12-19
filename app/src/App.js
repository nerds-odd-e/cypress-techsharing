import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GroupList from "./GroupList";
import GroupEdit from "./GroupEdit";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/groups" exact={true} component={GroupList} />
        <Route path="/groups/:id" component={GroupEdit} />
      </Switch>
    </Router>
  );
}
