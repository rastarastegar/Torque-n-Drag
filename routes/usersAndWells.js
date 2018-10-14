const router = require("express").Router();
const dbController = require("../controllers/dbController");

// Matches with "/users"
// router.route("/")
//   .get(dbController.well.findAll)
//   .post(dbController.well.create)
  //gonna create a whole new thingy :p
router.route("/")
.post(dbController.userAndWells.findByUid);
    

// Matches with "/api/books/:id"
// routeryarn .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
