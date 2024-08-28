import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FunctionComponent } from "./common/types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createBrowserRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			{/* <TanStackRouterDevelopmentTools
				router={router}
				initialIsOpen={false}
				position="bottom-right"
			/>
			<ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
};

export default App;
