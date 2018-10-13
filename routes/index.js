const router = require("express").Router();
const userRoutes = require("./users");
const wellsRoutes = require("./wells");

// User routes
router.use("/users", userRoutes);
router.use("/wells", wellsRoutes);
const wellRoutes = require("./wells")
const surveyRoutes = require("./surveys")

// User routes
router.use("/users", userRoutes);
router.use("/wells", wellRoutes);
router.use("/surveys", surveyRoutes);


module.exports = router;
