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

app.get("/api/records", (req, res) => {
	res.send(records);
});

app.listen(port, () => console.log(`Server is running in port ${port}`));
