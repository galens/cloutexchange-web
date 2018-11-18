import React from "react"
import PropTypes from "prop-types"
import DataTable from "../components/DataTable"
import Card from "../components/Card"
import FollowerChart from "../components/Chart"

export default function Home(props) {
	const {  celebData } = props

	return (
		<div>
    <div>
      <FollowerChart />
    </div>
			<div>
        <Card celeb={ celebData[0] } />
        <Card celeb={ celebData[1] } />
        <Card celeb={ celebData[2] } />
      </div>
      <div>
				<DataTable celebData={ celebData } />
			</div>
    </div>
	);
}

Home.propTypes = {
	celebData: PropTypes.array.isRequired
}