/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
const TestimonialCard = ({ imageLink, rating, description, title }) => {
	return (
		<div className="bg-primaryShades-300 w-1/4 h-3/4 flex flex-col  p-5 rounded-lg shadow-lg hover:scale-105 cursor-pointer">
			<div className="h-2/6 bg-cover bg-center flex items-center justify-center">
				<div
					className="h-[8rem] w-[8rem] bg-cover bg-center rounded-full"
					style={{ backgroundImage: `url(${imageLink})` }}
				/>
			</div>

			<div className="h-1/6 w-full flex justify-center items-center">
				<span className="text-yellow-500 text-2xl flex gap-1">
					{Array.from({ length: rating }).map((_, index) => (
						<FaStar key={index} active={index < rating} />
					))}
				</span>
			</div>

			<div className="h-2/6 flex justify-center items-center text-center">
				<p className="text-gray-700 text-xl">{description}</p>
			</div>

			<div className="h-1/6 flex justify-center items-center text-xl text-gray-500">
				<p>{title}</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
