// import Register from "../components/Register";
import Login from "../components/Login";
import Register from "../components/Register";
import RegisterOrg from "../components/RegisterOrg";
import logo from "../assets/images/logo_green.png";

import { useState } from "react";

const LoginPage = () => {
	const [isRegister, setRegister] = useState("login");

	return (
		<div className="h-screen w-full md:flex">
			<div className="relative overflow-hidden md:flex w-1/3 bg-primaryShades-200 justify-around items-center hidden">
				<div>
					<img src={logo} alt="" />
				</div>
				<div className="border-primaryShades-900 bg-primaryShades-400 absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div className="border-primaryShades-900 bg-primaryShades-400 absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div className="border-primaryShades-900 bg-primaryShades-400 absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div className="border-primaryShades-900 bg-primaryShades-400 absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			</div>
			<div className="flex w-2/3 justify-center py-10 items-center bg-primaryShades-100">
				{/* {isRegister ? (
					<Register setRegister={setRegister} />
				) : (
					<Login setRegister={setRegister} />
				)} */}

				{isRegister === "register" && (
					<Register setRegister={setRegister} />
				)}
				{isRegister === "login" && <Login setRegister={setRegister} />}
				{isRegister === "registerOrg" && (
					<RegisterOrg setRegister={setRegister} />
				)}
			</div>
		</div>
	);
};

export default LoginPage;
