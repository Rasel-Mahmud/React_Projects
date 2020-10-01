import React, { Fragment, useState, useEffect } from "react";
import { fetchData, postData } from "./API";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import List from "./List";
import "./record.scss";

const Container = () => {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		fetchData().then(({ data }) => setRecords(data));
	}, [records]);

	const onSubmitHandler = (formData) => {
		postData(formData).then(({ data }) => setRecords([...records, data]));
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
