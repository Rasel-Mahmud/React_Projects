import React from "react";

const Section = ({ children, headingLevel = 2, headingtext }) => {
	const H = `h${headingLevel}`;
	return (
		<section>
			<H>{headingtext}</H>
			{children}
		</section>
	);
};

export default Section;
