import React from 'react';
import { render } from 'react-dom';
import Home from './Home/Home';

render(
	<Home 
		{...window.CLOUT_CELEB_APP_PROPS}
	/>,
	document.getElementById('clout-exchange-app')
);