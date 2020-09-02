import axios from "axios";

const APICalling = async () => {
	return await axios.get(
		"https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
	);
};

export default APICalling;
