import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import DashboardLayout from 'layouts/DashboardLayout'

import DashboardPage from 'pages/dashboard/DashboardPage'

const DashboardRouter = ({ match }) => {
	return (
		<DashboardLayout>
			<Route exact path={`$[match.url}`} component={DashboardPage} />
		</DashboardLayout>
	)
}

export default withRouter(DashboardRouter)
