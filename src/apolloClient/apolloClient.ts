import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from "@apollo/client";

const apolloClient = new ApolloClient({
	uri: "http://localhost:3000",
	cache: new InMemoryCache(),
});

export default apolloClient;
