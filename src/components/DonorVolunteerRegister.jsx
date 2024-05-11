/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrganizationRegister = ({ setDoctor, setTeacher }) => {
	const [isChecked, setIsChecked] = useState(false);
	const [selectedType, setSelectedType] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleTypeButtonClick = (type) => {
		setSelectedType(type === selectedType ? null : type);
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	const notify = (message) => {
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

	const handleSubmit = () => {
		if (selectedType === "teacher") {
			setTeacher(true);
			notify("Successfully registered as a teacher, wait to be verified");
		} else {
			setDoctor(true);
			notify("Successfully registered as a Doctor, wait to be verified");
		}
	};

	return (
		<div className="bg-gradient-to-tr from-primaryShades-300 to-primaryShades-500 rounded-lg flex flex-col items-center justify-center pt-8 pb-8 gap-5 w-1/2 ">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-3xl font-semibold text-white mb-4">
					Registration
				</h1>
				<div className="flex ml-4 mb-4">
					<button
						className={`mx-2 px-4 py-2 rounded-md ${
							selectedType === "teacher"
								? "bg-blue-900 text-white"
								: ""
						} border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out ${
							selectedType === "teacher" ? "scale-125" : ""
						}`}
						onClick={() => handleTypeButtonClick("teacher")}
					>
						Teacher
					</button>
					<button
						className={`mx-2 px-4 py-2 rounded-md ${
							selectedType === "doctor"
								? "bg-blue-900 text-white"
								: ""
						} border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out ${
							selectedType === "doctor" ? "scale-125" : ""
						}`}
						onClick={() => handleTypeButtonClick("doctor")}
					>
						Doctor
					</button>
				</div>
			</div>
			<div className="flex justify-center">
				<input
					type="text"
					placeholder="Location..."
					className="rounded-md p-2 w-60"
				/>
			</div>
			<div className="flex justify-center">
				<input
					type="text"
					placeholder="Speciality..."
					className="rounded-md p-2 w-60"
				/>
			</div>
			<div className="flex justify-center">
				<label
					htmlFor="file-upload"
					className="bg-white text-blue-500 font-bold rounded-md cursor-pointer p-2 w-60 text-center"
				>
					<input
						id="file-upload"
						type="file"
						className="hidden"
						onChange={handleFileChange}
					/>
					{selectedFile ? selectedFile.name : "Upload Document"}
				</label>
			</div>
			<div className="flex justify-center items-center">
				<input
					type="checkbox"
					id="terms"
					checked={isChecked}
					onChange={handleCheckboxChange}
					className="rounded-md p-0.5"
				/>
				<label htmlFor="terms" className="ml-2 text-white">
					I agree with terms and conditions
				</label>
			</div>{" "}
			<button
				className={
					"bg-white rounded-md pr-9 pl-9 pt-3 pb-3 w-auto hover:bg-gray-200 transition duration-300 ease-in-out hover:scale-105"
				}
				onClick={handleSubmit}
			>
				Submit
			</button>
			<div className="text-white">
				<button>Privacy Policy</button>
			</div>
		</div>
	);
};

export default OrganizationRegister;
