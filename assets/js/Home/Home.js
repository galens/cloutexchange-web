import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DataTable from '../components/DataTable'
import Card from '../components/Card'
import FollowerChart from '../components/FollowerChart'

export default class Home extends Component {
  constructor(props) {
    super(props);

    // set initial state variables here
    this.state = {
      highlightedRowId: null,
      topCardId: Math.floor(Math.random()*(4))
    }

    this.handleRowClick = this.handleRowClick.bind(this);
  }

  handleRowClick(celebId) {
    this.setState({highlightedRowId: celebId}); // highlight row in FollowerChart
    this.setState({topCardId: celebId-1}); // update top card to be id from selected row
  }

  render() {
    const { celebData } = this.props;
    const { topCardId } = this.state;

    return (
      <div>
        <div>
          <FollowerChart 
            celeb={celebData[topCardId]} 
          />
        </div>
          <div className="flex">
            <Card celeb={celebData[0]} />
            <Card celeb={celebData[1]} />
            <Card celeb={celebData[2]} />
          </div>
          <div>
            <DataTable 
              {...this.props}
              {...this.state}
              celebData={celebData} 
              onRowClick={this.handleRowClick}
            />
          </div>
      </div>
    );
  }
}

Home.propTypes = {
	celebData: PropTypes.array.isRequired
}