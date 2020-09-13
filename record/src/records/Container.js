import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import List from "./List";
import "./record.scss";

const Container = () => {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		axios
			.get("/api/records")
			.then((res) => setRecords(res.data))
			.catch((err) => console.log(err));
	}, [records]);

	const onSubmitHandler = (formData) => {
		axios
			.post("/api/records", formData)
			.then(({ data, status }) => {
				if (status != 2000) {
					return;
				}
				setRecords([...records, data]);
			})
			.catch((err) => {
				console.log(err);
			});
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
