/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Login = ({ setRegister }) => {
	const submitForm = (e) => {
		e.preventDefault();
		console.log("Form Submitted");
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
						htmlFor="grid-email"
					>
						email
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
						id="grid-email"
						type="email"
						placeholder="example@test.com"
					/>
					{/* <p className="text-red-500 text-xs italic">
								Please fill out this field.
							</p> */}
				</div>

				<div className="">
					<label
						className="uppercase w-auto text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-password"
					>
						password
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
						id="grid-password"
						type="password"
						placeholder="*********"
					/>
					{/* <p className="text-red-500 text-xs italic">
								Please fill out this field.
							</p> */}
				</div>

				<button className="bg-white w-3/4 h-10 rounded-xl self-center flex flex-row items-center justify-center gap-x-6">
					Login
				</button>
			</form>
			<div className="w-2/3 flex flex-row items-center justify-center gap-x-2">
				<div className="bg-slate-800 h-0.5 w-2/3"> </div>
				<p className="bodia-kalam">or</p>
				<div className="bg-slate-800 h-0.5 w-2/3"> </div>
			</div>

			<div className="bg-white w-3/4 h-10 rounded-xl self-center flex flex-row items-center justify-center gap-x-6">
				<img src="/src/assets/google-icon.svg" />
				<button className=" text-black">Login With Google</button>
			</div>

			<Link
				onClick={() => setRegister((prevState) => !prevState)}
				className="text-black-500 underline mx-2 text-left"
			>
				Don{"'"}t have an account?
			</Link>
		</div>
	);
};

export default Login;
