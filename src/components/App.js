import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './app.css'
function App() {
  return (
    <div>
      <NavBar />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
      </Switch>
    </div>
  )
}

export default App;