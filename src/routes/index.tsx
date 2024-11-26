import { createBrowserRouter } from "react-router-dom";
// import Layout from "../components/layout/Layout";
import ProtectRoute from "./ProtectRoute";
import About from "../pages/About";
import Welcome from "../pages/Welcome";
import EPath from "./path";
import LoginPage from "../pages/login";
import Layout from "@/components/layouts/auth";
import Main from "@/pages/main";

const router = createBrowserRouter([
	{
		path: EPath.Welcome,
		element: <Welcome />,
	},
	{
		path: EPath.Login,
		element: <LoginPage />,
	},
	{
		path: EPath.Index,
		element: <Layout />,
		children: [
			{
				path: EPath.Index,
				element: <Main />,
			},
		],
	},
]);

export default router;
