const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/user");

passport.use(
	new localStrategy(
		{
			usernameField: "email", // Use "email" instead of default "username"
		},
		async (username, password, done) => {
			const q = await User.findOne({ email: username }).exec();
			if (!q) {
				return done(null, false, { message: "Incorrect username." });
			}
			const isValid = q.validPassword(password);
			if (!isValid) {
				return done(null, false, { message: "Incorrect password." });
			}
			return done(null, q);
		}
	)
);

module.exports = passport;
