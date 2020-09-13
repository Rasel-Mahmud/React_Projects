import React, { useState } from "react";
import Input from "./Input";

const initialvalue = {
	recordName: "",
	artistName: "",
	description: "",
};

const Form = ({ submit }) => {
	const [entry, setEntry] = useState(initialvalue);

	const onChangeHandler = (e) => {
		setEntry({
			...entry,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (!entry.recordName || !entry.artistName || !entry.description) {
			return;
		}
		submit({ ...entry });
		setEntry(initialvalue);
	};
	return (
		<form onSubmit={onSubmitHandler}>
			<Input
				labelText="Record Name"
				name="recordName"
				onchange={onChangeHandler}
				value={entry.recordName}
			/>

			<Input
				labelText="Artist Name"
				name="artistName"
				onchange={onChangeHandler}
				value={entry.artistName}
			/>

			<Input
				type="textarea"
				labelText="Descriptions"
				name="description"
				onchange={onChangeHandler}
				value={entry.description}
			/>

			<button type="submit">Add</button>
		</form>
	);
};
export default Form;
