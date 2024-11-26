import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FunctionComponent } from "./common/types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient/apolloClient";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createBrowserRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<ApolloProvider client={apolloClient}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<Toaster />
					<RouterProvider router={router} />
					{/* <TanStackRouterDevelopmentTools
				router={router}
				initialIsOpen={false}
				position="bottom-right"
			/>
			
			<ReactQueryDevtools initialIsOpen={false} /> */}
				</ThemeProvider>
			</QueryClientProvider>
		</ApolloProvider>
	);
};

export default App;
