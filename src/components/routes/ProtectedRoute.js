import React from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { AUTH_TOKEN } from 'config/Constants'

const ProtectedRoute = ({ location, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				localStorage.getItem(AUTH_TOKEN) ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	)
}

export default withRouter(ProtectedRoute)
