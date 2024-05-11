import AdminAccount from "../components/AdminAccount";
// import OrganizationNavbar from "../components/OrganizationNavbar";

const AdminAccountPage = () => {
	return (
		<>
			<AdminNavbar />
			<div className="h-screen w-screen flex justify-center items-center bg-secondary">
				<AdminAccount />
			</div>
		</>
	);
};

export default AdminAccountPage;
