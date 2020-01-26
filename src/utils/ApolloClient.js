import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getAuthToken } from 'utils/Auth'
import camelize2 from 'camelize2'

const httpLink = createHttpLink({
	uri: process.env.REACT_APP_API_URL,
})

const authLink = setContext((_, { headers }) => {
	const token = getAuthToken()

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

const omitTypename = (key, value) => {
	return key === '__typename' ? undefined : value
}

const omitTypenameLink = new ApolloLink((operation, forward) => {
	if (operation.variables) {
		operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename)
	}
	return forward(operation)
})

const camelCaseLink = new ApolloLink((operation, forward) => {
	return forward(operation).map(response => {
		return { ...response, data: camelize2(response.data, { blacklist: ['__typename'] }) }
	})
})

const client = new ApolloClient({
	link: ApolloLink.from([authLink, omitTypenameLink, camelCaseLink, httpLink]),
	cache: new InMemoryCache(),
})

export default client
