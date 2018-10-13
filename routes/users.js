const router = require("express").Router();
const dbController = require("../controllers/dbController");

// Matches with "/users"
router.route("/")
  .get(dbController.user.findAll)
  .post(dbController.user.create)
  

// Matches with "/api/books/:id"
// routeryarn .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
