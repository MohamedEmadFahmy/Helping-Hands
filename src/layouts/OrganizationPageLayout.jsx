import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OrganizationNavbar from "../components/OrganizationNavbar";

import "react-toastify/dist/ReactToastify.css";

const OrganizationPageLayout = () => {
	return (
		<>
			<OrganizationNavbar />
			<Outlet />
			<ToastContainer />
		</>
	);
};

export default OrganizationPageLayout;
