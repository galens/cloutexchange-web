import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DataTable from '../components/DataTable'
import Card from '../components/Card'
import FollowerChart from '../components/FollowerChart'

export default class Home extends Component {
  constructor(props) {
    super(props);

    // set initial state variables here
    /*this.state = {

    }*/
  }

  render() {
    const {  celebData } = this.props;
    const rand = Math.floor(Math.random()*(celebData.length));
    console.log(rand);

    return (
      <div>
        <div>
          <FollowerChart celeb={celebData[rand]} />
        </div>
          <div className="flex">
            <Card celeb={celebData[0]} />
            <Card celeb={celebData[1]} />
            <Card celeb={celebData[2]} />
          </div>
          <div>
            <DataTable celebData={ celebData } />
          </div>
      </div>
    );
  }
}

Home.propTypes = {
	celebData: PropTypes.array.isRequired
}