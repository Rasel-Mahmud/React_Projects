import React, { Fragment, useState } from "react";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import List from "./List";
import "./record.scss";

const Container = () => {
	const [records, setRecords] = useState([]);

	const onSubmitHandler = (formData) => {
		setRecords([...records, formData]);
	};

	return (
		<Fragment>
			<Header />
			<main>
				<Section headingtext="Add New Record">
					<Form submit={onSubmitHandler} />
				</Section>
				<Section headingtext="Records">
					<List records={records} />
				</Section>
			</main>
		</Fragment>
	);
};

export default Container;
