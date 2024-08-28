import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProtectRoute from "./ProtectRoute";
import About from "../pages/About";
import Welcome from "../pages/Welcome";

const router = createBrowserRouter([
	{
		path: "/welcome",
		element: <Welcome />,
	},
	{
		path: "/",
		element: (
			<ProtectRoute>
				<Layout />
			</ProtectRoute>
		),
		children: [
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

export default router;
