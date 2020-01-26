import { AUTH_TOKEN } from 'config/Constants'

export const setAuthToken = token => {
	return localStorage.setItem(AUTH_TOKEN, token)
}

export const getAuthToken = () => {
	return window.localStorage.getItem(AUTH_TOKEN)
}
