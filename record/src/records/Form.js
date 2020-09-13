import React, { useState } from "react";

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
			<label htmlFor="recordName">Record Name</label>
			<input
				type="text"
				name="recordName"
				id="recordName"
				onChange={onChangeHandler}
			/>
			<label htmlFor="artistName">Artist Name</label>
			<input
				type="text"
				name="artistName"
				id="artistName"
				onChange={onChangeHandler}
			/>
			<label htmlFor="description">Description</label>
			<textarea
				name="description"
				id="description"
				onChange={onChangeHandler}
				rows="7"
			/>
			<button type="submit">Add</button>
		</form>
	);
};
export default Form;