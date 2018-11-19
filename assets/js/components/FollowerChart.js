import React, { Component } from 'react';
import { Line } from 'react-chartjs';
import PropTypes from 'prop-types';

const chartData = {
  labels: ["1/1 0:00","1/1 6:00","1/1 12:00","1/1 18:00","1/2 0:00","1/1 0:00","1/1 6:00","1/1 12:00","1/1 18:00","1/2 0:00","1/1 0:00","1/1 6:00","1/1 12:00","1/1 18:00","1/2 0:00","1/1 0:00","1/1 6:00","1/1 12:00","1/1 18:00","1/2 0:00","1/2 0:00","1/2 0:00","1/2 0:00","1/2 0:00","1/2 0:00","1/2 0:00","1/2 0:00",],
  datasets: [
    {
      label: "Price Chart",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [2234,2264,2239,2243,2250,2252,2261,2261,2260,2261,2263,2264,2284,2267,2295,2278,2316,2293,2274,2278,2270,2281,2271,2273,2283,2289,2299,2273]
    }
  ]
}

export default class FollowerChart extends Component {
  constructor ( props ) {
    super(props);

    this.returnSignAndAmountLine = this.returnSignAndAmountLine.bind(this);
  }

  returnSignAndAmountLine(celeb) {
    var classTag = '';
    var priceout = '';

    if(celeb.price_diff > 0) {
      classTag = 'price-chart-price-diff price-diff-positive';
      priceout = '+$' + celeb.price_diff.toFixed(2);
    } else {
      classTag = 'price-chart-price-diff price-diff-negative';
      priceout = '-$' + Math.abs(celeb.price_diff.toFixed(2));
    }

    return <h5 className={classTag}>{priceout} (%{celeb.percent_diff})</h5>
  }

  /*
  toggleActive ( name ) {
    document.getElementById( name ).classList.toggle( "active" )
  }
  */
  
  render () {
    const { celeb } = this.props;

    
    return (
      <div className="price-chart">
        <div className="price-chart-container">
        <div className="price-chart-top">
          <div className="price-chart-profile">
            <div className="price-chart-avatar"></div>
            <div className="price-chart-info">
              <h2 className="price-chart-ticker">{celeb.symbol}</h2>
              <h4 className="price-chart-name">{celeb.name}</h4>
            </div>
          </div>
          <div className="price-chart-price-container">
            <h1 className="price-chart-price">${celeb.current_price}</h1>
            {this.returnSignAndAmountLine(celeb)}
          </div>
          </div>
          <div className="price-chart-linedata">
            <Line data={ chartData } width="560" height="200" />
          </div>
        </div>
      </div>
    )
  }
}

FollowerChart.propTypes = {
  celeb: PropTypes.object.isRequired
}