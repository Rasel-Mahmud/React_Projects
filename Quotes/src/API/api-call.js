import axios from "axios";

const APICalling = async () => {
	return await axios(
		"https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
	);
};

export default APICalling;
