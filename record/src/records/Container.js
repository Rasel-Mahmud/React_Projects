import React, { Fragment, useState } from "react";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import List from "./List";
import "./record.scss";

const recordData = [
	{
		recordName: "React Rave",
		artistName: "Rasel Mahmud",
		description: "A rocking good rave bopping to the tune of JavScript",
	},
	{
		recordName: "Building an App",
		artistName: "The Component",
		description: "Sounds of the Future",
	},
];

const Container = () => {
	const [record, setRecord] = useState(recordData);
	return (
		<Fragment>
			<Header />
			<main>
				<Section headingtext="Add New Record">
					<Form />
				</Section>
				<Section headingtext="Records">
					<List records={record} />
				</Section>
			</main>
		</Fragment>
	);
};

export default Container;
