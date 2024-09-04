import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProtectRoute from "./ProtectRoute";
import About from "../pages/About";
import Welcome from "../pages/Welcome";
import EPath from "./path";

const router = createBrowserRouter([
	{
		path: EPath.Welcome,
		element: <Welcome />,
	},
	{
		path: EPath.Index,
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
