import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/users");
  },
  // // Gets the book with the given id
  // getUsers: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
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
