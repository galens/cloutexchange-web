import React from 'react';
import PropTypes from 'prop-types';
import CloutExchangeList from './CloutExchangeList';

export default function CloutExchange(props) {
	const { 
		celebData
	} = props;

	return (
		<div>
			<div>
		        <h3>Welcome to clout.exchange!</h3>
			</div>
			<div>
				<CloutExchangeList
		            celebData={celebData}
		        />
			</div>
    	</div>
	);
}

CloutExchange.propTypes = {
	celebData: PropTypes.array.isRequired
};