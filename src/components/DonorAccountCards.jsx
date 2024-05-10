/* eslint-disable no-unused-vars */
import DonorAccountCard from "../components/DonorAccountCard";
import image from "../assets/images/gand/G157357.jpeg";
import image2 from "../assets/images/gand/ahl.jpeg";

const DonorAccountCards = () => {
	return (
		<div className="flex flex-col items-center justify-center w-10/12 h-full gap-5">
			<DonorAccountCard
				accountName={"Mohamed Emad Ahmed"}
				accountEmail={"mohamed@gmail.com"}
				accountArea={"Cairo"}
				accountImage={image}
			/>
			<DonorAccountCard
				accountName={"Gando Gandofly Gando"}
				accountEmail={"mohamed@gmail.com"}
				accountArea={"Cairo"}
				accountImage={image2}
			/>
			<DonorAccountCard
				accountName={"Kerrrrr Kerr Kerr"}
				accountEmail={"mohamed@gmail.com"}
				accountArea={"Cairo"}
				accountImage={image}
			/>
			<DonorAccountCard
				accountName={"Ghorza CS Ghorza"}
				accountEmail={"mohamed@gmail.com"}
				accountArea={"Cairo"}
				accountImage={image2}
			/>
		</div>
	);
};

export default DonorAccountCards;
