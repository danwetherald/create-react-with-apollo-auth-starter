import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'utils/ApolloClient'
import { BrowserRouter, Switch } from 'react-router-dom'
import ProtectedRoute from 'components/routes/ProtectedRoute'
import AuthenticationRoute from 'components/routes/AuthenticationRoute'

import AuthRouter from 'routers/AuthRouter'
import DashboardRouter from 'routers/DashboardRouter'

const App = () => {
	return (
		<ApolloProvider client={ApolloClient}>
			<BrowserRouter>
				<Switch>
					<ProtectedRoute path="/dashboard" component={DashboardRouter} />
					<AuthenticationRoute path="/" component={AuthRouter} />
				</Switch>
			</BrowserRouter>
		</ApolloProvider>
	)
}

export default App
