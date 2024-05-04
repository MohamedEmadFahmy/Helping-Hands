import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
	return (
		<>
			<h1>in main layout</h1>
			<Outlet />
			<ToastContainer />
		</>
	);
};

export default MainLayout;
