import React, { Component } from "react"
import "./Chart.css"
import { Line } from "react-chartjs"

export class Card extends Component {
  constructor ( props ) {
    super()
    this.state = { ...props }
  }

  // toggleActive ( name ) {
  //   document.getElementById( name ).classList.toggle( "active" )
  // }
  
  render (){
    console.log( this.state )
    return (
      <div className="price-card-container">
        <div className="price-card">
          <div className="price-card-left">
            <div className="price-card-avatar"></div>
          </div>
          <div className="price-card-right">
            <div className="price-card-data">
              <h5 className="price-card-title">Biggest % Gain</h5>
              <div className="price-card-stock-name">{ this.state.celeb.name } ({ this.state.celeb.symbol })</div>
              <h3 className="price-card-stock-price">${ this.state.celeb.current_price }</h3>
              <h5 className="price-card-stock-difference">{ this.state.celeb.price_diff }%</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
