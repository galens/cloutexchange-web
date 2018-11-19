import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataTable extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { celebData, highlightedRowId, onRowClick } = this.props;

		return (
			<div className="celebData">
        <table className="price-data-table">
          <thead>
          <tr>
            <th>TICKER</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>DIFFERENCE</th>
            <th>% CHANGE</th>
          </tr>
          </thead>
          <tbody>
          { celebData.map(celeb => { return (
            <tr 
              key={ celeb.id }
              className={highlightedRowId === celeb.id ? 'highlighted' : ''}
              onClick={() => onRowClick(celeb.id)}
            >
              <td>{ celeb.symbol }</td>
              <td>{ celeb.name }</td>
              <td>{ celeb.current_price.toFixed(2) }</td>
              <td>{ celeb.price_diff.toFixed(2) }</td>
              <td>{ celeb.percent_diff }</td>
            </tr>
          )}) }
          </tbody>
        </table>
			</div>
		);
	}
}

DataTable.propTypes = {
  highlightedRowId: PropTypes.any,
	celebData: PropTypes.array.isRequired,
  onRowClick: PropTypes.func.isRequired
};
