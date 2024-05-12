/* eslint-disable no-unused-vars */
import Books from "../assets/DonationCardsImages/Books.jfif";
import DonationCard from "./DonationCard";
import Food from "../assets/DonationCardsImages/Food.jfif";
import Insulin from "../assets/DonationCardsImages/insulin.jfif";
import MaleIcon from "../assets/DonationCardsImages/MaleIcon.jfif";
import MedicalSupplies from "../assets/DonationCardsImages/MedicalSupplies.jfif";
import Oven from "../assets/DonationCardsImages/Oven.jfif";
import ProfileIcon from "../assets/DonationCardsImages/profileIcon.png";
import SchoolSupplies from "../assets/DonationCardsImages/SchoolSupplies.jfif";
import Shirt from "../assets/DonationCardsImages/Shirt.jfif";
import Toys from "../assets/DonationCardsImages/Toys.jfif";
import Alnas from "../assets/DonationCardsImages/Alnas.png";
import AnimalShelterImg from "../assets/DonationCardsImages/AnimalShelter.png";
import Blankets from "../assets/DonationCardsImages/MedicalBlankets.jfif";
import BloodPressure from "../assets/DonationCardsImages/BloodPressure.jfif";
import FoodBankImg from "../assets/DonationCardsImages/FoodBank.png";
import HygieneKitImg from "../assets/DonationCardsImages/HygieneKit.jfif";
import NonPerishableFoodImg from "../assets/DonationCardsImages/Food.jfif";
import Org57357 from "../assets/DonationCardsImages/HospitalLogo.png";
import Orman from "../assets/DonationCardsImages/Orman.png";
import PetFoodImg from "../assets/DonationCardsImages/petFood.jfif";
import SchoolImg from "../assets/DonationCardsImages/School.png";
import SchoolSuppliesImg from "../assets/DonationCardsImages/SchoolSupplies.jfif";
import Syringe from "../assets/DonationCardsImages/Syringe.jfif";
import WomensShelterImg from "../assets/DonationCardsImages/WomenShelter.png";

import data from "../data.json";

const RegularDonationParent = () => {
	console.log(data);
	return (
		<div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
			{data.map((donation, index) => (
				<DonationCard
					key={index}
					field1={donation.field1}
					field2={donation.field2}
					field3={donation.field3}
					field4={donation.field4}
					field5={donation.field5}
					field6={donation.field6}
					orgImg={donation.orgImg}
					itemImg={donation.itemImg}
					isBlood={donation.isBlood}
				/>
			))}
		</div>
	);
};

export default RegularDonationParent;
