/* eslint-disable no-unused-vars */
import OrganizationCard from "./OrganizationCard";
import image from "../assets/images/gand/57357.jpeg";
import image2 from "../assets/images/gand/ahl.jpeg";
import image3 from "../assets/images/gand/cccpa.jpeg";
import image4 from "../assets/images/gand/rman1.jpg";

const OrganizationCards = () => {
	return (
		<div className="flex flex-col items-center justify-center w-10/12 h-full gap-5">
			<OrganizationCard
				accountName={"57357 hospital"}
				OrganizationType={"medical research hospital"}
				OrganizationArea={"Cairo"}
				accountImage={image}
			/>
			<OrganizationCard
				accountName={"اهل مصر"}
				OrganizationType={"medical research hospital"}
				OrganizationArea={"Cairo"}
				accountImage={image2}
			/>
			<OrganizationCard
				accountName={"CCCPA"}
				OrganizationType={"Center for Conflict Resolations"}
				OrganizationArea={"Cairo"}
				accountImage={image3}
			/>
			<OrganizationCard
				accountName={"الاورمان"}
				OrganizationType={"medical research hospital"}
				OrganizationArea={"Suhag"}
				accountImage={image4}
			/>
		</div>
	);
};

export default OrganizationCards;
