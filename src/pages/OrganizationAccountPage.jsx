import OrganizationAccount from "../components/OrganizationAccount";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrganizationAccountPage = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const registrationSuccess = searchParams.get("registrationSuccess");

	useEffect(() => {
		if (registrationSuccess === "true") {
			toast.success("Registration Successful");
		}
	}, [registrationSuccess]);
	return (
		<>
			<div className="h-screen w-full flex justify-center items-center bg-secondary">
				<OrganizationAccount />
			</div>
		</>
	);
};

export default OrganizationAccountPage;
