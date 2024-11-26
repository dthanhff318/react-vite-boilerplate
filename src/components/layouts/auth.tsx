import { Outlet } from "react-router-dom";
import { FunctionComponent } from "../../common/types";

const Layout = (): FunctionComponent => {
	return (
		<>
			<div>Layout</div>
			<Outlet />
		</>
	);
};

export default Layout;
