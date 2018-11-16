import React, { Component } from 'react';
import CloutExchange from './CloutExchange';
import PropTypes from 'prop-types';

export default class CloutExchangeApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	// best place to put ajax calls when needed, fired after dom is rendered
	componentDidMount() {
	}

    componentWillUnmount() {
    }

	render() {
		return (
			<CloutExchange
				{...this.props}
				{...this.state}
			/>
		)
	}
}

CloutExchangeApp.propTypes = {
};

CloutExchangeApp.defaultProps = {
};