import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CloutExchangeList extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {
		const { celebData } = this.props;

		return (
			<div>
				{celebData.map(celeb => {
	            	return <div key={celeb.id}>
	            			Name: {celeb.name}<br />
	            			Symbol: {celeb.symbol}<br />
	            			Price: {celeb.current_price}<br />
	            			Difference: {celeb.price_diff}<br />
	            			Percent diff: {celeb.percent_diff}<br />
	            			Timespan: {celeb.timespan}<br />
	            			<br />
	            		   </div>
	            })}
			</div>
		);
	}
}

CloutExchangeList.propTypes = {
	celebData: PropTypes.array.isRequired
};