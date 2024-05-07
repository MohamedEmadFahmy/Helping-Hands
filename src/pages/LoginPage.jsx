// import Register from "../components/Register";
import Login from "../components/Login";
import Register from "../components/Register";
import RegisterOrg from "../components/RegisterOrg";
import { useState } from "react";

const LoginPage = () => {
	const [isRegister, setRegister] = useState("register");

	return (
		<div className="h-screen w-screen md:flex">
			<div className="relative overflow-hidden md:flex w-1/3 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
				<div>
					<h1 className="text-white font-bold text-4xl font-sans">
						GoFinance
					</h1>
					<p className="text-white mt-1">
						The most popular peer to peer lending at SEA
					</p>
					<button
						type="submit"
						className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
					>
						Read More
					</button>
				</div>
				<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			</div>
			<div className="flex w-2/3 justify-center py-10 items-center bg-white">
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
