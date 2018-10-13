import axios from "axios";

export default {
  // Gets all books
  getUser: function(id) {
    return axios.get("/users/" + id);
  },

  saveWell: function(id_wellData) {
    axios.post("/wells",id_wellData)
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
};
