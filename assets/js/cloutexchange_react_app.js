import React from "react";
import { render } from "react-dom";
import CloutExchangeApp from "./Home/Home";

render(
	<CloutExchangeApp 
		{...window.CLOUT_CELEB_APP_PROPS}
	/>,
	document.getElementById("clout-exchange-app")
);