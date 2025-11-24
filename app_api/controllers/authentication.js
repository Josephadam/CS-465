const mongoose = require("mongoose");
const User = require("../models/user"); // ✅ direct import (guaranteed)
const passport = require("passport");

const register = async (req, res) => {
	// validate request
	if (!req.body.email || !req.body.name || !req.body.password) {
		return res.status(400).json({ message: "Email, name, and password are required." });
	}

	const user = new User({
		email: req.body.email,
		name: req.body.name,
		password: "",
	});
	user.setPassword(req.body.password);
	const q = await user.save();

	if (!q) {
		return res.status(400).json(err);
	} else {
		return res.status(200).json({ token: user.generateJWT() });
	}
};

// POST /api/login
const login = (req, res) => {
	// Validate message to ensure that email and password are present.
	if (!req.body.email || !req.body.password) {
		return res.status(400).json({ message: "All fields required" });
	}
	// Delegate authentication to passport module
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			// Error in Authentication Process
			return res.status(404).json(err);
		}
		if (user) {
			// Auth succeeded - generate JWT and return to caller
			const token = user.generateJWT();
			res.status(200).json({ token });
		} else {
			// Auth failed return error
			res.status(401).json(info);
		}
	})(req, res);
};

module.exports = {
	register,
	login,
};
