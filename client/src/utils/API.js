import axios from "axios";

export default {
  // Gets all books
  getUser: function(id) {
    return axios.get("/users", id);
  },

  saveWell: function(wellData) {
    return axios.post("/wells",wellData)
  },

  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/users", userData);
  },

  getUserAndWells: function(uid){
    return axios.post("/api/userandwells",uid);
  }
  // saveNewWell: function(wellData) {
  //   return axios.post("/")
  // }
  // saveSurveyData: function(surveyData) {
  //   return axios.post("")
  // }

};
