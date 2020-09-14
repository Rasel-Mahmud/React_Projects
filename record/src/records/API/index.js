import axios from "axios";

// Fetch the record
export const fetchData = async () => await axios.get("/api/records");

// Post the record
export const postData = async (formData) =>
	await axios.post("/api/records", formData);
