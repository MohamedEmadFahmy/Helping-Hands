import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DonorNavbar from "../components/DonorNavbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";

const DonorPageLayout = () => {
	const timeInterval = 10000; // Interval in milliseconds (10 seconds)

	useEffect(() => {
		const notifyEveryInterval = () => {
			const message = "Driver has arrived to pick up your donation!";
			toast.success(message, {
				// Modify options here
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		};

		const intervalId = setInterval(notifyEveryInterval, timeInterval);

		// Clear interval on component unmount to avoid memory leaks
		return () => clearInterval(intervalId);
	}, [timeInterval]);

	return (
		<>
			<DonorNavbar />
			<Outlet />
			<Footer />
			<ToastContainer />
		</>
	);
};

export default DonorPageLayout;
