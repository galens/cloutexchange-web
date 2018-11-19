import React, { Component } from 'react';
import { Line } from 'react-chartjs';
import PropTypes from 'prop-types';

export default class FollowerChart extends Component {
  constructor ( props ) {
    super(props);

    this.returnSignAndAmountLine = this.returnSignAndAmountLine.bind(this);
    this.buildChartDataObject = this.buildChartDataObject.bind(this);
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

  buildChartDataObject(celeb) {
    // create copies of the arrays, otherwise array contents get modified
    const copy_labels = celeb.labels.slice();
    const copy_data   = celeb.data.slice();

    return {
      labels: copy_labels,
      datasets: [
        {
          label: "Price Chart",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: copy_data
        }
      ]
    }
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
            <Line data={ this.buildChartDataObject(celeb) } width="560" height="200" />
          </div>
        </div>
      </div>
    )
  }
}

FollowerChart.propTypes = {
  celeb: PropTypes.object.isRequired
}