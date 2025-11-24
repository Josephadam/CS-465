const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");
const authenticationController = require("../controllers/authentication");

// User registration route
router.route("/register").post(authenticationController.register);

// User login route
router.route("/login").post(authenticationController.login);

// Trips routes
router.route("/trips").get(tripsController.tripsList).post(tripsController.tripsAddTrip);

router.route("/trips/:tripCode").get(tripsController.tripsFindByCode).put(tripsController.tripsUpdateTrip);

module.exports = router;
