/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

const DonorTypeCard = ({ imageLink }) => {
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<div
			className="w-[20vw] h-[30vh] rounded-lg bg-slate-600 flex items-center justify-center text-white text-xl hover:cursor-pointer hover:bg-purple-400 hover:drop-shadow-lg "
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* <p>Donor Type Card</p> */}

			<img src={imageLink} alt="" className="h-5/6" />

			{isHovered && <p>Hovered</p>}
		</div>
	);
};

export default DonorTypeCard;
