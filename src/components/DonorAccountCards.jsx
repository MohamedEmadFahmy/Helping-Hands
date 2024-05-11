/* eslint-disable no-unused-vars */
import DonorAccountCard from "../components/DonorAccountCard";
import image from "../assets/images/gand/gando.jpg";
import image2 from "../assets/images/gand/ghrz.jpg";
import image3 from "../assets/images/gand/cccpa1.jpeg";
import image4 from "../assets/images/gand/kr.jpg";

const DonorAccountCards = () => {
	return (
		<div className="flex flex-col items-center justify-center w-10/12 h-full gap-5">
			<DonorAccountCard
				accountName={"Mohamed Emad "}
				accountEmail={"mohamed@gmail.com"}
				accountPhoneNumber={"01002229091"}
				accountArea={"Banfsag/Cairo"}
				accountType={"Doctor"}
				accountImage={image3}
			/>
			<DonorAccountCard
				accountName={"Gando Gandofly "}
				accountEmail={"gand@gmail.com"}
				accountPhoneNumber={"01002159199"}
				accountArea={"Rehab/Cairo"}
				accountType={"Doctor"}
				accountImage={image}
			/>
			<DonorAccountCard
				accountName={"Kerrrrr Kerr"}
				accountEmail={"kr@gmail.com"}
				accountPhoneNumber={"01002221919"}
				accountArea={"elharm/Cairo"}
				accountType={"Teacher"}
				accountImage={image4}
			/>
			<DonorAccountCard
				accountName={"Ghorza CS "}
				accountEmail={"ghrz@gmail.com"}
				accountPhoneNumber={"01002291010"}
				accountType={"RegularDonor"}
				accountArea={"Rehab/Cairo"}
				accountImage={image2}
			/>
			<DonorAccountCard
				accountName={"Youssef Abdelsatar"}
				accountEmail={"abso@gmail.com"}
				accountPhoneNumber={"01002129191"}
				accountArea={" mivida/6 October"}
				accountType={"Teacher"}
				accountImage={image3}
			/>
		</div>
	);
};

export default DonorAccountCards;
