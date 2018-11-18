import React, { Component } from "react"
import "./Chart.css"
import { Line } from "react-chartjs"

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

export class FollowerChart extends Component {
  constructor ( props ) {
    super()
    this.state = { ...props }
  }

  // toggleActive ( name ) {
  //   document.getElementById( name ).classList.toggle( "active" )
  // }
  
  render (){
    return (
      <div className="price-chart">
        <div className="price-chart-container">
        <div className="price-chart-top">
          <div className="price-chart-profile">
            <div className="price-chart-avatar"></div>
            <div className="price-chart-info">
              <h2 className="price-chart-ticker">JBIEB</h2>
              <h4 className="price-chart-name">Justin Bieber</h4>
            </div>
          </div>
          <div className="price-chart-price-container">
            <h1 className="price-chart-price">$2070.07</h1>
            <h5 className="price-chart-price-diff price-diff-positive">+$1.21</h5>
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

export default FollowerChart
