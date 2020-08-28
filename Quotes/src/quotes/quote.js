import React from "react";

const Quotes = () => {
	return (
		<div className="quote-container" id="quote-container">
			{/* Quote Text */}
			<div className="quote-text">
				<i className="fas fa-quote-left"></i>
				<span id="quote">{quoteText}</span>
			</div>
			{/* Quote Author */}
			<div className="quote-author">
				<p>{quoteAuthor}</p>
			</div>
			<div className="quote-button">
				<button className="twitter-button" id="tweet">
					<i className="fab fa-twitter icon" onClick={twitterShareHandler}></i>
					<i className="fab fa-facebook icon" onClick={fbShareHandler}></i>
				</button>
				<button id="new-quote" onClick={quoteHandler}>
					New Quote
				</button>
			</div>
		</div>
	);
};

export default Quotes;
