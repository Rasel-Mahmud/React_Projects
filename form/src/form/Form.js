import React, { useEffect, useState } from "react";

const Form = ({ submit, data, initialState }) => {
	const [formState, setFormState] = useState(initialState);

	useEffect(() => {
		setFormState(data);
	}, [data]);

	const onchangeForm = (e) => {
		const value =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setFormState({
			...formState,
			[e.target.name]: value,
		});
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		submit(formState);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			{/* First Name */}
			<label htmlFor="firstName">First Name</label>
			<input
				type="text"
				id="firstName"
				name="firstName"
				value={formState.firstName}
				onChange={onchangeForm}
			/>

			{/* Last Name */}
			<label htmlFor="lastName">Last Name</label>
			<input
				type="text"
				id="lastName"
				name="lastName"
				value={formState.lastName}
				onChange={onchangeForm}
			/>

			{/* Biography */}
			<label htmlFor="biography">Biography</label>
			<textarea
				name="biography"
				id="biography"
				rows="8"
				onChange={onchangeForm}
				value={formState.biography}
			/>

			{/* Preferred Transport */}
			<label htmlFor="transport">Preferred Transport</label>
			<select
				name="transport"
				id="transport"
				value={formState.transport}
				onChange={onchangeForm}
			>
				<option value="">Select One</option>
				<option value="bus">Bus</option>
				<option value="train">Train</option>
				<option value="planes">Planes</option>
			</select>

			{/* Preferred Meals */}
			<fieldset>
				<legend>Select Your Meals</legend>
				<label htmlFor="breakfast">Breakfast</label>
				<input
					type="checkbox"
					id="breakfast"
					name="breakfast"
					checked={formState.breakfast}
					onChange={onchangeForm}
				/>

				<label htmlFor="lunch">Lunch</label>
				<input
					type="checkbox"
					id="lunch"
					name="lunch"
					checked={formState.lunch}
					onChange={onchangeForm}
				/>

				<label htmlFor="dinner">Dinner</label>
				<input
					type="checkbox"
					id="dinner"
					name="dinner"
					checked={formState.dinner}
					onChange={onchangeForm}
				/>
			</fieldset>

			{/* T-Shirt Size */}
			<fieldset>
				<legend>T-Shirt Size</legend>
				<label htmlFor="sizeL">Large</label>
				<input
					type="radio"
					id="sizeL"
					name="shirtSize"
					value="l"
					onChange={onchangeForm}
					checked={formState.shirtSize === "l"}
				/>

				<label htmlFor="sizeM">Medium</label>
				<input
					type="radio"
					id="sizeM"
					name="shirtSize"
					value="m"
					onChange={onchangeForm}
					checked={formState.shirtSize === "m"}
				/>

				<label htmlFor="sizeS">Large</label>
				<input
					type="radio"
					id="sizeS"
					name="shirtSize"
					value="s"
					onChange={onchangeForm}
					checked={formState.shirtSize === "s"}
				/>
			</fieldset>

			{/* Terms of conditions */}
			<label htmlFor="agree">I Agree TOC</label>
			<input
				type="checkbox"
				id="agree"
				checked={formState.agree}
				name="agree"
				onChange={onchangeForm}
			/>

			<button type="submit">Submit</button>
		</form>
	);
};

export default Form;
