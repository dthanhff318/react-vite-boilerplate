import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FunctionComponent } from "./common/types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appConfigStore from "./store/appConfigStore";
import { useEffect } from "react";
import { ETheme } from "./helpers/enum";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createBrowserRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	const { setTheme } = appConfigStore();

	useEffect(() => {
		const themeLocal = JSON.parse(
			JSON.stringify(localStorage.getItem("theme") || "")
		);
		if (!!themeLocal) {
			setTheme(themeLocal as ETheme);
		} else if (window.matchMedia("(prefers-color-schema: dark)")) {
			setTheme(ETheme.DARK);
		} else {
			setTheme(ETheme.LIGHT);
		}
	}, []);
	return (
		<QueryClientProvider client={queryClient}>
			<Toaster
				position="bottom-center"
				toastOptions={{
					duration: 3000,
				}}
			/>
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
