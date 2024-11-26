import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
	uri: "http://localhost:3000/tizz-flow",
	cache: new InMemoryCache(),
});

export default apolloClient;
