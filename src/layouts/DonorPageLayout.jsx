import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DonorNavbar from "../components/DonorNavbar";

import "react-toastify/dist/ReactToastify.css";

const DonorPageLayout = () => {
	return (
		<>
			<DonorNavbar />
			<Outlet />
			<ToastContainer />
		</>
	);
};

export default DonorPageLayout;
