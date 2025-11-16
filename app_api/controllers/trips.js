const mongoose = require("mongoose");
const Trip = require("../models/travlr"); // Register model
const Model = mongoose.model("trips");

// post /trips - add a new trip
const tripsAdd = async (req, res) => {
	// Create a new Trip instance from the request body
	const newTrip = new Trip({
		code: req.body.code,
		name: req.body.name,
		length: req.body.length,
		start: req.body.start,
		resort: req.body.resort,
		perPerson: req.body.perPerson,
		image: req.body.image,
		description: req.body.description,
	});
};
// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {
	const q = await Model.find({}) // No filter, return all records
		.exec();

	// Uncomment the following line to show results of query
	// on the console
	// console.log(q);

	if (!q) {
		// Database returned no data
		return res.status(404).json(err);
	} else {
		// Return resulting trip list
		return res.status(200).json(q);
	}
};

const tripsAddTrip = async (req, res) => {
	console.log("Creating trip with body:", req.body);

	try {
		const trip = await Model.create({
			code: req.body.code,
			name: req.body.name,
			length: req.body.length,
			start: req.body.start,
			resort: req.body.resort,
			perPerson: req.body.perPerson,
			image: req.body.image,
			description: req.body.description,
		});

		// 201 = Created
		return res.status(201).json(trip);
	} catch (err) {
		console.log("Error creating trip:", err);
		// 400 = Bad Request (validation error, etc.)
		return res.status(400).json(err);
	}
};

const tripsFindByCode = async (req, res) => {
	const q = await Model.find({}) // No filter, return all records
		.find({ code: req.params.tripCode }) // Filter by trip code
		.exec();

	// Uncomment the following line to show results of query
	// on the console
	// console.log(q);

	if (!q) {
		// Database returned no data
		return res.status(404).json(err);
	} else {
		// Return resulting trip list
		return res.status(200).json(q);
	}
};

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
	// Debugging (optional)
	console.log("UPDATE /api/trips/:tripCode params:", req.params);
	console.log("UPDATE /api/trips/:tripCode body:", req.body);

	try {
		const q = await Model.findOneAndUpdate(
			{ code: req.params.tripCode }, // find by tripCode
			{
				code: req.body.code,
				name: req.body.name,
				length: req.body.length,
				start: req.body.start,
				resort: req.body.resort,
				perPerson: req.body.perPerson,
				image: req.body.image,
				description: req.body.description,
			},
			{ new: true } // ✅ return the updated document
		).exec();

		if (!q) {
			// No trip matched that code
			return res.status(404).json({
				message: `Trip not found for code ${req.params.tripCode}`,
			});
		}

		// ✅ 200 OK for an update
		return res.status(200).json(q);
	} catch (err) {
		console.log("Error updating trip:", err);
		return res.status(400).json(err);
	}
};

module.exports = {
	tripsList,
	tripsFindByCode,
	tripsAddTrip,
	tripsUpdateTrip,
};
