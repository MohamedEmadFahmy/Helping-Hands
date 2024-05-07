/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

const DonorTypeCard = ({ imageLink, description, isClicked }) => {
	return (
		<div
			className={`w-[20vw] h-[30vh] rounded-lg bg-slate-600 flex items-center justify-center text-white text-xl hover:cursor-pointer hover:drop-shadow-lg hover:scale-105 relative transition-transform ease-in-out ${
				isClicked && "scale-105"
			}`}
		>
			<div
				className={`absolute inset-0 ${
					isClicked
						? "bg-[rgba(30,41,59,0.7)]"
						: "bg-[rgba(30,41,59,0)]"
				} transition-color ease-in-out hover:bg-[rgba(30,41,59,0.7)] rounded-lg	`}
			>
				<div
					className={`w-full h-full flex items-center justify-center transition-opacity ease-in-out ${
						isClicked ? "opacity-1" : "opacity-0"
					} hover:opacity-100`}
				>
					<p className="text-2xl">
						{description
							? description
							: "This is a placeholder description"}
					</p>
				</div>
			</div>

			<img src={imageLink} alt="" className="h-5/6" />

			{/* {isClicked && <p>Clicked</p>} */}
		</div>
	);
};

export default DonorTypeCard;
