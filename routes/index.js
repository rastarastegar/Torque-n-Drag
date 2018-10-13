const router = require("express").Router();
const userRoutes = require("./users");
const wellsRoutes = require("./wells");

// User routes
router.use("/users", userRoutes);
router.use("/wells", wellsRoutes);

module.exports = router;
