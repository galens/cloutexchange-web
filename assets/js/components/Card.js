import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor ( props ) {
    super(props);
  }

  // toggleActive ( name ) {
  //   document.getElementById( name ).classList.toggle( "active" )
  // }
  
  render () {
    const { celeb } = this.props;

    return (
      <div className="price-card-container">
        <div className="price-card">
          <div className="price-card-left">
            <div className="price-card-avatar"></div>
          </div>
          <div className="price-card-right">
            <div className="price-card-data">
              <h5 className="price-card-title">Biggest % Gain</h5>
              <div className="price-card-stock-name">{ celeb.name } ({ celeb.symbol })</div>
              <h3 className="price-card-stock-price">${ celeb.current_price }</h3>
              <h5 className="price-card-stock-difference">{ celeb.price_diff }%</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  celeb: PropTypes.object.isRequired
}