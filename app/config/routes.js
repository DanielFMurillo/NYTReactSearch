import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="favorites" component={Favorites} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;















var React = require("react");

var Router = require("react-router");
var Route = Router.Route;

var IndexRoute  = Router.IndexRoute;

var Main = require("../components/Main");
var Search = require("../components/Search");
var Saved = require("../components/Saved");

module.exports = (

  <Route path="/" component={Main}>

    <Route path="Search" component={Search} />
    <Route path="Saved" component={Saved} />

    <IndexRoute component={Search} />

  </Route>

);