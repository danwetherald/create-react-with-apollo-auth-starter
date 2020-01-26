import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import DashboardPage from 'pages/dashboard/DashboardPage'

const DashboardRouter = ({ match }) => {
	return (
		<>
			<Route exact path={`$[match.url}`} component={DashboardPage} />
		</>
	)
}

export default withRouter(DashboardRouter)
