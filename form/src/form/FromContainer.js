import React, { useState, Fragment } from "react";
import Form from "./Form";
import { initialState, loadedValue } from "./FormData";
import "./../scss/Form.scss";

const FromContainer = () => {
	const [data, setData] = useState(initialState);

	const containerSubmit = (e) => {
		console.log(e);
	};

	const onLoadHandler = (e) => {
		e.preventDefault();
		setData(loadedValue);
	};

	return (
		<Fragment>
			<Form submit={containerSubmit} data={data} initialState={initialState} />
			<button type="button" onClick={onLoadHandler}>
				Load Sample data
			</button>
		</Fragment>
	);
};

export default FromContainer;
