const router = require("express").Router();
const userRoutes = require("./users");
const wellRoutes = require("./wells")
const surveyRoutes = require("./surveys")
const userAndWells = require("./usersAndWells")

// User routes
router.use("/users", userRoutes);
router.use("/wells", wellRoutes);
router.use("/surveys", surveyRoutes);
router.use("/api/userandwells",userAndWells);

module.exports = router;
