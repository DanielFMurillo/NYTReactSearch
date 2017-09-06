import React from "react";
import Results from "./children/Results";
import Saved from "./children/Saved";


const Main = props => (
    <div>
      <Navbar />
      {props.children}
      <Search />
    </div>
  );

var Router = require("react-router")

var Main = React.createClass({

  render: function(){

    return(

      <div className="main-container">


        <div className="container">

          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">NYT-React</a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#/search">Search</a></li>
                  <li><a href="#/saved">Saved Articles</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="jumbotron">
            <h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
          </div>

          {this.props.children}

        </div>
      </div>
    )
  }
});

export default Main;
