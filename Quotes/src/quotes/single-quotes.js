import React, { useState, useEffect } from "react";
import "./../style/style.css";
import APICalling from "../API/api-call";
import Quotes from "./quotes";
import Loader from "./loader";

const SingleQuote = () => {
	// State management
	const [quote, setQuote] = useState({
		quoteText: "",
		quoteAuthor: "",
		loading: false,
	});

	// API Handler
	const quoteDataFromAPI = () => {
		setQuote({ loading: true });
		APICalling()
			.then((res) => {
				setQuote({
					quoteText: res.data.quoteText,
					quoteAuthor: res.data.quoteAuthor,
					loading: false,
				});
			})
			.catch((err) => setQuote({ loading: false }));
	};

	// Button Handler
	const quoteHandler = () => {
		quoteDataFromAPI();
	};

	// Twitter Share Handler
	const twitterShareHandler = () => {
		const { quoteText, quoteAuthor } = quote;
		const tweetURL = `https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}`;
		window.open(tweetURL, "_blank");
	};

	// Facebook Shere Handler
	const fbShareHandler = () => {
		const fbURL = `https://www.facebook.com/sharer.php?u=http%3A%2F%2Flocalhost:3000%2F`;
		window.open(fbURL, "_blank");
	};

	// Shwoing component during render
	useEffect(() => {
		quoteDataFromAPI();
	}, []);

	// destructuring data from object
	const { loading, quoteText, quoteAuthor } = quote;

	return loading ? (
		<Loader />
	) : (
		<Quotes
			quoteText={quoteText}
			quoteAuthor={quoteAuthor}
			twitterShareHandler={twitterShareHandler}
			quoteHandler={quoteHandler}
			fbShareHandler={fbShareHandler}
		/>
	);
};

export default SingleQuote;
