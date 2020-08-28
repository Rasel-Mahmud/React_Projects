import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import SingleQuote from "./quotes/single-quotes";

ReactDOM.render(
	<React.StrictMode>
		<SingleQuote />
	</React.StrictMode>,
	document.getElementById("root")
);
serviceWorker.unregister();
