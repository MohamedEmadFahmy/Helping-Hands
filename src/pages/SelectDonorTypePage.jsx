/* eslint-disable no-unused-vars */
import { useState } from "react";
import DonorTypeCard from "../components/DonorTypeCard";
import { useNavigate } from "react-router-dom";

const SelectDonorTypePage = () => {
	const [clickedDiv, setClickedDiv] = useState(null);
	const navigate = useNavigate();

	const handleClick = (index) => {
		// Set the clicked div to the clicked index
		setClickedDiv(index);
		// alert(`Clicked div ${index}`); // Remove this line
	};

	const handleSaveDonorType = () => {
		if (!clickedDiv) {
			alert("Please select a donor type");
		} else {
			if (clickedDiv == 2 || clickedDiv == 3) {
				navigate("/donor/volunteer?registrationSuccess=true");
			} else {
				navigate("/donor/home?registrationSuccess=true");
			}
		}
	};

	return (
		<div className="w-full h-screen bg-slate-100 flex flex-col items-center justify-around">
			<h1 className="text-4xl font-bold text-slate-900 mt-5">
				What type of donations do you want to do?
			</h1>

			<div className="flex flex-col gap-10 items-center">
				<DonorTypeCard
					imageLink="/src/assets/images/items.png"
					description="Donate items you don't need"
					onClick={() => handleClick(1)} // pass index or identifier
					isClicked={clickedDiv === 1} // Check if this card is clicked
				/>

				<div className="flex gap-10">
					<DonorTypeCard
						imageLink="/src/assets/images/doctor.png"
						description="Help patients in need"
						onClick={() => handleClick(2)}
						isClicked={clickedDiv === 2}
					/>

					<DonorTypeCard
						imageLink="/src/assets/images/teacher.png"
						description="Help teach students in need"
						onClick={() => handleClick(3)}
						isClicked={clickedDiv === 3}
					/>
				</div>
			</div>

			<button
				className="text-xl font-bold bg-slate-500 p-4 rounded-md text-white hover:shadow-lg hover:bg-slate-600"
				onClick={handleSaveDonorType}
			>
				Continue
			</button>
		</div>
	);
};

export default SelectDonorTypePage;
