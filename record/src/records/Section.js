import React from "react";
import Halmet from "react-helmet";

const Section = ({ children, headingLevel = 2, headingtext }) => {
	const H = `h${headingLevel}`;
	return (
		<section>
			<Halmet>
				<title>{`Add Records`}</title>
			</Halmet>
			<H>{headingtext}</H>
			{children}
		</section>
	);
};

export default Section;
