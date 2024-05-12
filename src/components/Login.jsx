/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({ setRegister }) => {
	const navigate = useNavigate();

	const submitForm = (e) => {
		e.preventDefault();
		if (e.target[0].value === "admin" && e.target[1].value === "admin") {
			navigate("/admin/account");
		} else if (
			e.target[0].value === "donor" &&
			e.target[1].value === "donor"
		) {
			navigate("/donor/home");
		} else if (
			e.target[0].value === "organization" &&
			e.target[1].value === "organization"
		) {
			navigate("/organization/account");
		}
	};

	return (
		<div
			id="login-container"
			className="bg-gradient-to-tr from-primaryShades-300 to-primaryShades-500 rounded-lg flex flex-col items-center justify-center pt-8 pb-8 gap-5 w-1/2"
			// relative overflow-hidden md:flex w-1/3 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden
		>
			<h1 className="text-white font-bold text-4xl font-sans">Login</h1>
			<form
				onSubmit={submitForm}
				className="w-full flex flex-col items-center pr-10 pl-10 gap-5"
			>
				<div className="">
					<label
						className="uppercase w-auto text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-username"
					>
						username
					</label>
					<input
						required
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
						id="grid-username"
						type="text"
						placeholder="username"
					/>
				</div>

				<div className="">
					<label
						className="uppercase w-auto text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-password"
					>
						password
					</label>
					<input
						required
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
						id="grid-password"
						type="password"
						placeholder="*********"
					/>
					{/* <p className="text-red-500 text-xs italic">
								Please fill out this field.
							</p> */}
				</div>

				<button className="bg-white w-1/4 hover:bg-neutral-200 hover:drop-shadow-lg hover:scale-105 h-10 rounded-xl self-center flex flex-row items-center justify-center gap-x-6">
					Login
				</button>
			</form>
			<div className="w-2/3 flex flex-row items-center justify-center gap-x-2">
				<div className="bg-slate-800 h-0.5 w-2/3"> </div>
				<p className="bodia-kalam">or</p>
				<div className="bg-slate-800 h-0.5 w-2/3"> </div>
			</div>

			<div className="bg-white w-2/4 h-10 rounded-xl self-center flex flex-row items-center justify-center gap-x-6 hover:bg-neutral-200 hover:drop-shadow-lg hover:scale-105 cursor-pointer">
				<img src="/src/assets/google-icon.svg" />
				<button className=" text-black">Login With Google</button>
			</div>

			<div className="flex flex-col gap-2 mt-2 items-center justify-center">
				<Link
					onClick={() => setRegister("register")}
					className="text-black-500 underline mx-2 text-left"
				>
					Don{"'"}t have an account?
				</Link>
				{/* <Link
					onClick={() => setRegister("registerOrg")}
					className="text-black  stroke-red underline mx-2 text-left"
				>
					Register as an organization
				</Link> */}
			</div>
		</div>
	);
};

export default Login;
