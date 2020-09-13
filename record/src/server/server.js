const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const port = 5000;

let records = [
	{
		id: 1,
		recordName: "React Rave",
		artistName: "Rasel Mahmud",
		description: "A rocking good rave bopping to the tune of JavaScript",
	},
	{
		id: 2,
		recordName: "Building an App",
		artistName: "The Component",
		description: "Sounds of the Future",
	},
];

// Getting data from API
app.get("/api/records", (req, res) => {
	res.send(records);
});

// Post Data on API
app.post("/api/records", (req, res) => {
	const newRecord = {
		id:
			records.reduce((acc, item) => {
				return item.id > acc ? item.id : acc;
			}, 0) + 1,
		...req.body,
	};
	records.push(newRecord);
	res.send(newRecord);
});

app.listen(port, () => console.log(`Server is running in port ${port}`));
