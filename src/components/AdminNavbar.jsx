import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo_white.png";
import reactLogo from "../assets/images/react.png";

const AdminNavbar = () => {
	const navigate = useNavigate();

	const navLinkStyling = ({ isActive }) =>
		isActive
			? "text-2xl transition-transform scale-110 font-semibold text-blue-500 border-b-2 border-blue-500 transition duration-500"
			: "text-2xl font-semibold text-white transition duration-200 ";

	return (
		<nav className="sticky top-0 z-50 w-full h-[10vh] bg-primary flex items-center pl-10 pr-10 gap-[10rem]">
			<img
				src={logo}
				alt=""
				className="h-[80%] object-contain cursor-pointer"
				onClick={() => navigate("/admin/donor-accounts")}
			/>
			<div
				id="nav-links"
				className="flex items-center justify-center gap-[5vw] h-full w-3/4"
			>
				<NavLink to="/admin/donor-accounts" className={navLinkStyling}>
					Donor Accounts
				</NavLink>
				<NavLink
					to="/admin/organization-accounts"
					className={navLinkStyling}
				>
					Organization Accounts
				</NavLink>
				<NavLink
					to="/admin/view-submissions"
					className={navLinkStyling}
				>
					View Submissions
				</NavLink>
			</div>
			<div className="flex items-center justify-center gap-3 w-1/7 h-full ">
				<img
					src={reactLogo}
					alt=""
					className="h-[50%] cursor-pointer"
					onClick={() => navigate("/Admin/account")}
				/>
				<NavLink to="/admin/account" className={navLinkStyling}>
					Account
				</NavLink>
			</div>
		</nav>
	);
};

export default AdminNavbar;
