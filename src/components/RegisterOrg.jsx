/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterOrg = ({ setRegister }) => {
	const navigate = useNavigate();

	const submitForm = (e) => {
		e.preventDefault();
		navigate("/organisation-home");
	};

	return (
		<div
			id="register-container"
			className="bg-gradient-to-tr from-primaryShades-300 to-primaryShades-500 rounded-lg flex flex-col items-center justify-center pt-8 pb-4 gap-2 w-[60%]"
			// relative overflow-hidden md:flex w-1/3 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden
		>
			<h1 className="text-white font-bold text-4xl font-sans">
				Register as an Organisation
			</h1>
			<form
				onSubmit={submitForm}
				className="w-full flex flex-col items-start pr-10 pl-10 gap-2"
			>
				<div className="">
					<label
						className="uppercase w-auto text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-username"
					>
						username
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
						id="grid-username"
						type="text"
						placeholder="Username"
					/>
					{/* <p className="text-red-500 text-xs italic">
								Please fill out this field.
							</p> */}
				</div>

				<div className="flex flex-wrap gap-[4rem] ">
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
					<div className="">
						<label
							className=" uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-retype-password"
						>
							Retype Password
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
							id="grid-retype-password"
							type="password"
							placeholder="********"
						/>
					</div>
				</div>

				<div className="flex flex-wrap gap-[4rem] ">
					<div className="">
						<label
							className="uppercase w-auto text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-first-name"
						>
							First Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
							id="grid-first-name"
							type="text"
							placeholder="Jane"
						/>
						{/* <p className="text-red-500 text-xs italic">
								Please fill out this field.
							</p> */}
					</div>
					<div className="">
						<label
							className=" uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-last-name"
						>
							Last Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
							id="grid-last-name"
							type="text"
							placeholder="Doe"
						/>
					</div>
				</div>
				<div className="w-2/3">
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

				<div className="flex items-center gap-10">
					<h1 className="text-xl font-normal">Gender:</h1>
					<div className="inline-flex items-center">
						<label
							className="relative flex items-center p-3 rounded-full cursor-pointer"
							htmlFor="male"
						>
							<input
								name="type"
								type="radio"
								className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
								id="male"
								checked
								readOnly
							/>
							<span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-3.5 w-3.5"
									viewBox="0 0 16 16"
									fill="currentColor"
								>
									<circle
										data-name="ellipse"
										cx="8"
										cy="8"
										r="8"
									></circle>
								</svg>
							</span>
						</label>
						<label
							className="mt-px font-light text-gray-700 cursor-pointer select-none"
							htmlFor="male"
						>
							Male
						</label>
					</div>
					<div className="inline-flex items-center">
						<label
							className="relative flex items-center p-3 rounded-full cursor-pointer"
							htmlFor="female"
						>
							<input
								name="type"
								type="radio"
								className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
								id="female"
							/>
							<span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-3.5 w-3.5"
									viewBox="0 0 16 16"
									fill="currentColor"
								>
									<circle
										data-name="ellipse"
										cx="8"
										cy="8"
										r="8"
									></circle>
								</svg>
							</span>
						</label>
						<label
							className="mt-px font-light text-gray-700 cursor-pointer select-none"
							htmlFor="female"
						>
							Female
						</label>
					</div>
				</div>
				<div className="w-2/3">
					<label
						className="uppercase w-auto text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-organisation-phone"
					>
						contact number
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
						id="grid-organisation-phone"
						type="phone"
						placeholder="+20"
					/>
				</div>

				<div className="flex flex-wrap gap-[4rem] w-full">
					<div className="">
						<label
							className="uppercase w-auto text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-organisation-name"
						>
							Organisation name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
							id="grid-organisation-name"
							type="text"
							placeholder="Organisation name"
						/>
					</div>
					<div className="">
						<label
							className=" uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-organisation-type"
						>
							Organisation Type
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
							id="grid-organisation-type"
							type="text"
							placeholder="Organisation type"
						/>
					</div>
				</div>
				<div className="flex flex-wrap gap-6 ">
					<div className="w-[30%]">
						<label
							className="uppercase w-auto text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-organisation-address"
						>
							Organisation Address
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
							id="grid-organisation-address"
							type="text"
							placeholder="Organisation Address"
						/>
					</div>
					<div className="w-[30%]">
						<label
							className="uppercase w-auto text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-organisation-area"
						>
							Organisation Area
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
							id="grid-organisation-area"
							type="text"
							placeholder="Organisation Area"
						/>
					</div>
					<div className="w-[30%]">
						<label
							className=" uppercase text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-organisation-governate"
						>
							Organisation Governate
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
							id="grid-organisation-governate"
							type="text"
							placeholder="Organisation Governate"
						/>
					</div>
				</div>

				<button className="bg-white w-1/4 h-10 mt-3 rounded-xl self-center flex flex-row items-center justify-center gap-x-6 hover:bg-neutral-200 hover:drop-shadow-lg hover:scale-105">
					Register
				</button>
			</form>

			<div className="flex flex-col gap-2 mt-2 items-center justify-center">
				<Link
					onClick={() => setRegister("login")}
					className="text-black underline mx-2 text-left"
				>
					Already have an account?
				</Link>
				<Link
					onClick={() => setRegister("register")}
					className="text-black  stroke-red underline mx-2 text-left"
				>
					Register as an individual
				</Link>
			</div>
		</div>
	);
};

export default RegisterOrg;
