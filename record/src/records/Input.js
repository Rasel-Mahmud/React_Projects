import React, { Fragment, useRef } from "react";
import uniqid from "uniqid";

const Input = ({ type = "text", labelText, name, onchange, value }) => {
	const id = useRef(uniqid());

	return (
		<Fragment>
			<label htmlFor={id.current}>{labelText}</label>
			{type === "textarea" ? (
				<textarea
					name={name}
					id={id.current}
					onChange={onchange}
					rows="7"
					value={value}
				/>
			) : (
				<input
					type="text"
					name={name}
					id={id.current}
					onChange={onchange}
					value={value}
				/>
			)}
		</Fragment>
	);
};

export default Input;
