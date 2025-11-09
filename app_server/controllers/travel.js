const tripsEndpoint = "http://localhost:3000/api/trips";
const options = {
	method: "GET",
	headers: {
		Accept: "application/json",
	},
};

// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

const travel = async function (req, res, next) {
	await fetch(tripsEndpoint, options)
		.then((res) => res.json())
		.then((json) => {
			let message = null;
			if (!json || json.length === 0) {
				message = "No trips found";
			} else {
				if (!json.length) {
					message = "No trips found in the database";
				}
			}
			res.render("travel", {
				title: "Travel Getaways",
				trips: json,
				message,
			});
		})
		.catch((err) => res.status(500).send(eer.message));
};

module.exports = {
	travel,
};
