import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import RegisterPage from 'pages/auth/RegisterPage'
import LoginPage from 'pages/auth/LoginPage'
import ForgotPasswordPage from 'pages/auth/ForgotPasswordPage'
import ResetPasswordPage from 'pages/auth/ResetPasswordPage'
import FourOhFourPage from 'pages/FourOhFourPage'

const AuthRouter = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/register" component={RegisterPage} />
			<Route exact path="/login" component={LoginPage} />
			<Route exact path="/forgot-password" component={ForgotPasswordPage} />
			<Route exact path="reset-password" component={ResetPasswordPage} />
			<Route component={FourOhFourPage} />
		</Switch>
	)
}

export default AuthRouter
