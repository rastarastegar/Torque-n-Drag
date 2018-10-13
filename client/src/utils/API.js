import axios from "axios";

export default {
  // Gets all books
  getUser: function(id) {
    return axios.get("/users/" + id);
  },

  saveWell: function(wellData) {
    axios.post("/wells",wellData)
  },
  // // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/users/" + id);
  },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/users", userData);
  }

  // saveNewWell: function(wellData) {
  //   return axios.post("/")
  // }
  // saveSurveyData: function(surveyData) {
  //   return axios.post("")
  // }

};
