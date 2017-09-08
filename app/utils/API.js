
import axios from "axios";

var URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
var APIKey = '010df052716e4cef8459eeb85a014d07';


const API = {

  search: function(query){
    let URL = "https://api.nytimes.com/svc/search/v2/articlesearch.jsonapi-key="
    let searchTerm = ""
    let startDate =  + "0101";
    let endDate =   + "1231";

    return axios.get(`${URL}&q=${searchTerm}`)

  },
  // Retrieves all quotes from the db
  getArticles: function() {
    return axios.get("/api/saved");
  },
  // Saves a new quote to the db
  saveArticles: function(text) {
    return axios.post("/api/saved", { text });
  },
  // Deletes a quote from the db
  deleteArticles: function(id) {
    return axios.delete(`/api/saved/${id}`);
  },
};

export default API;


