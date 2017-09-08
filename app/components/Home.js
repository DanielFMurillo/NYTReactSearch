import React, { Component } from "react";
import Panel from "./common/Panel";
import ArticleForm from "./common/ArticleForm";
import API from "../utils/API";

class Home extends Component {
  state = {
    Articles: []
  };
  // Getting all Articles when the component mounts
  componentDidMount() {
    this.getArticles();
  }
  getArticles = () => {
    API.getArticles().then((res) => {
      this.setState({ Articles: res.data });
    });
  }
  // A helper method for rendering one panel for each article
  renderArticles() {
    return this.state.Articles.map(article => (
      <Panel
        article={article}
        key={article._id}
        getArticles={this.getArticles}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <ArticleForm
            getArticles={this.getArticles}
          />
        </div>
        <div className="row">
          <hr />
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default Home;
