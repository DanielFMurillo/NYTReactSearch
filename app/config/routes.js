import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Search from "../components/Search";
import Saved from "../components/Saved";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>  
      <Route path="search" component={Search} />
      <Route path="saved" component={Saved} />      
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;

