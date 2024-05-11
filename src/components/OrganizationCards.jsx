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
				OrganizationName={"57357 hospital"}
				OrganizationType={"medical research hospital"}
				OrganizationArea={"Cairo"}
				OrganizationImage={image}
				OrganizationPhoneNumber={"01004441910"}
			/>
			<OrganizationCard
				OrganizationName={"اهل مصر"}
				OrganizationType={"medical research hospital"}
				OrganizationArea={"Cairo"}
				OrganizationImage={image2}
				OrganizationPhoneNumber={"01005551910"}
			/>
			<OrganizationCard
				OrganizationName={"CCCPA"}
				OrganizationType={"Center for Conflict Resolations"}
				OrganizationArea={"Cairo"}
				OrganizationImage={image3}
				OrganizationPhoneNumber={"01006661910"}
			/>
			<OrganizationCard
				OrganizationName={"الاورمان"}
				OrganizationType={"medical research hospital"}
				OrganizationArea={"Suhag"}
				OrganizationImage={image4}
				OrganizationPhoneNumber={"01007771910"}
			/>
		</div>
	);
};

export default OrganizationCards;
