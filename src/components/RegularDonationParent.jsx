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

const RegularDonationParent = () => {
	return (
		<div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
			<DonationCard
				field1="57357"
				field2="Category: Medical Supplies"
				field3="New Cairo"
				field4="Low"
				field5="As an organization committed to providing compassionate healthcare services, having medical blankets is essential for ensuring the comfort and well-being of our patients. These blankets serve a vital role in maintaining optimal body temperature, offering warmth and comfort during recovery periods and medical procedures. With medical blankets readily available, we can enhance the overall patient experience, promoting a sense of security and dignity while they receive care. Additionally, these blankets play a crucial role in infection control protocols, providing a barrier against environmental contaminants and promoting a hygienic healthcare environment for our patients and staff alike."
				field6="100"
				orgImg={Org57357}
				itemImg={Blankets}
				isBlood={false}
			/>
			<DonationCard
				field1="57357"
				field2="Category: Medical Supplies"
				field3="New Cairo"
				field4="Medium"
				field5="possessing blood pressure monitors enables us to provide essential health screenings, empowering individuals to monitor and manage their cardiovascular well-being proactively. By having these monitors on hand, we can facilitate preventive care initiatives, ensuring early detection of hypertension and fostering healthier lifestyles within our community. Incorporating blood pressure monitoring into our programs strengthens our commitment to promoting long-term health outcomes and reducing the burden of cardiovascular diseases."
				field6="20"
				orgImg={Org57357}
				itemImg={BloodPressure}
				isBlood={false}
			/>
			<DonationCard
				field1="Orman"
				field2="Category: Medical Supplies"
				field3="Nasr City"
				field4="High"
				field5="As an organization dedicated to healthcare excellence, access to medical syringes is indispensable for delivering precise medication dosages and lifesaving treatments to our patients. These syringes serve as indispensable tools in administering vaccines, medications, and therapeutic interventions, ensuring the safety and efficacy of our medical procedures. By maintaining a reliable supply of medical syringes, we uphold the highest standards of patient care, empowering our healthcare professionals to provide accurate and compassionate treatment tailored to each patient's needs."
				field6="300"
				orgImg={Orman}
				itemImg={Syringe}
				isBlood={false}
			/>
			<DonationCard
				field1="Local Animal Shelter"
				field2="Category: Food Donation"
				field3="City Center"
				field4="High"
				field5="As an organization committed to rescuing and caring for animals in need, we rely on donations of pet food to provide nutritious meals to the animals under our care. Your donation of pet food will ensure that our shelter animals receive the nourishment they need to thrive and find loving forever homes. Together, we can make a difference in the lives of these beloved pets."
				field6="200"
				orgImg={AnimalShelterImg}
				itemImg={PetFoodImg}
				isBlood={false}
			/>
			<DonationCard
				field1="Local Food Bank"
				field2="Category Food Donation"
				field3="Downtown Area"
				field4="Low"
				field5="Non-perishable food items such as canned goods, pasta, and rice are essential for supporting individuals and families facing food insecurity. As an organization dedicated to fighting hunger in our community, we require donations of non-perishable food items to stock our food bank shelves and provide emergency food assistance to those in need. Your donation will help us feed hungry individuals and families and bring hope to those experiencing hardship."
				field6="300"
				orgImg={FoodBankImg}
				itemImg={NonPerishableFoodImg}
				isBlood={false}
			/>
			<DonationCard
				field1="Women's Shelter"
				field2="Category: Medical Supplies"
				field3="Mokattam"
				field4="Medium"
				field5="Hygiene kits containing essential personal care items are critical for promoting the health and well-being of women and families experiencing homelessness or domestic violence. As an organization dedicated to providing shelter and support services to women in crisis, we require donations of hygiene kits to ensure that our clients have access to basic hygiene necessities. Your donation will help us empower women to regain their dignity and rebuild their lives with confidence."
				field6="100"
				orgImg={WomensShelterImg}
				itemImg={HygieneKitImg}
				isBlood={false}
			/>
			<DonationCard
				field1="Local School"
				field2="Category: School Supplies"
				field3="New Cairo"
				field4="High"
				field5="Access to quality education is essential for empowering children and preparing them for success. As an organization committed to supporting education, we require donations of school supplies to ensure that every child has the tools they need to learn and thrive in the classroom. Your donation of school supplies will equip students with the resources they need to excel academically and reach their full potential."
				field6="150"
				orgImg={SchoolImg}
				itemImg={SchoolSuppliesImg}
				isBlood={false}
			/>
			<DonationCard
				field1="Anonymous User"
				field2="Category: Clothes"
				field3="Giza"
				field4="High"
				field5="As an individual in need of clothing, I am facing challenges in maintaining my dignity and comfort due to limited access to appropriate attire. Clothing is not just a basic necessity but also a crucial aspect of self-expression and confidence. With adequate clothing, I can navigate daily life with a sense of dignity and security, regardless of my circumstances. Your support in providing clothing not only meets a fundamental need but also empowers me to pursue opportunities and engage with society with renewed hope and dignity."
				field6="1"
				orgImg={ProfileIcon}
				itemImg={Shirt}
				isBlood={false}
			/>
			<DonationCard
				field1="Kareem"
				field2="Category: Electrial Appliances"
				field3="Maadi"
				field4="Medium"
				field5="As an individual seeking to enhance my culinary skills and nourish myself and my loved ones, having access to an oven is essential. With its versatile cooking capabilities, an oven serves as the cornerstone of my kitchen, enabling me to prepare a wide array of nutritious and flavorful meals. From baking wholesome bread to roasting hearty vegetables and creating indulgent desserts, an oven empowers me to explore my creativity in the kitchen and cultivate a healthier lifestyle. Its reliable performance ensures that every dish is cooked to perfection, fostering joy, satisfaction, and togetherness around the dinner table."
				field6="1"
				orgImg={MaleIcon}
				itemImg={Oven}
				isBlood={false}
			/>
			<DonationCard
				field1="Anonymous User"
				field2="Category: Medical Supplies"
				field3="Cairo"
				field4="High"
				field5="As an individual living with diabetes, access to insulin medication is not just a matter of convenience but a lifeline for managing my health and well-being. Insulin plays a pivotal role in regulating my blood sugar levels, allowing me to lead a fulfilling and active life despite my condition. Its timely administration ensures stability and prevents potentially life-threatening complications associated with diabetes. By ensuring consistent access to insulin medication, I can confidently navigate daily activities, pursue my goals, and enjoy quality time with my loved ones, all while maintaining optimal health and vitality."
				field6="10"
				orgImg={ProfileIcon}
				itemImg={Insulin}
				isBlood={false}
			/>
			{/* Add 10 more DonationCard components */}
			<DonationCard
				field1="Anonymous User"
				field2="Category: Book Requests"
				field3="Alexandria"
				field4="Low"
				field5="Access to books is essential for fostering a love of reading and expanding knowledge. As an individual seeking access to books, I am eager to explore new worlds, learn new ideas, and broaden my horizons through reading. Your donation of books will provide me and others with opportunities for intellectual growth, personal development, and lifelong learning. Together, we can unlock the power of literacy and inspire a passion for reading in our community."
				field6="1"
				orgImg={ProfileIcon}
				itemImg={Books}
				isBlood={false}
			/>

			<DonationCard
				field1="Abso"
				field2="Category: Toy Donation"
				field3="Aswan"
				field4="High"
				field5="As a child in need of toys, play is an essential part of my development, happiness, and well-being. Toys provide me with opportunities for creativity, imagination, and social interaction, enriching my childhood experiences and fostering positive growth. Your donation of toys will bring joy, laughter, and moments of play to children like me, creating lasting memories and brightening our days during challenging times."
				field6="1"
				orgImg={MaleIcon}
				itemImg={Toys}
				isBlood={false}
			/>

			{/* Add 8 more DonationCard components */}
			<DonationCard
				field1="Anonymous User"
				field2="Category: Food Donation"
				field3="Luxor"
				field4="Medium"
				field5="Access to nutritious food is essential for maintaining health and well-being. As an individual in need of food assistance, I am facing hunger and food insecurity due to limited access to resources. Your donation of food will provide me and others with access to essential nutrition, ensuring that we can meet our basic needs and thrive. Together, we can fight hunger and build stronger, healthier communities."
				field6="1"
				orgImg={ProfileIcon}
				itemImg={Food}
				isBlood={false}
			/>

			<DonationCard
				field1="Anonymous User"
				field2="Category: Medical Supplies"
				field3="Sharm El Sheikh"
				field4="High"
				field5="Access to medical supplies is crucial for maintaining health and well-being, especially for individuals with medical conditions or undergoing treatment. As an individual in need of medical supplies, I require essential items such as bandages, medications, and medical equipment to manage my health and alleviate symptoms. Your donation of medical supplies will support my medical care and enable me to live a healthier, more comfortable life."
				field6="1"
				orgImg={ProfileIcon}
				itemImg={MedicalSupplies}
				isBlood={false}
			/>

			<DonationCard
				field1="Gandofly"
				field2="Category: Clothes"
				field3="Port Said"
				field4="Low"
				field5="As an individual in need of clothing, I am facing challenges in maintaining my dignity and comfort due to limited access to appropriate attire. Clothing is not just a basic necessity but also a crucial aspect of self-expression and confidence. With adequate clothing, I can navigate daily life with a sense of dignity and security, regardless of my circumstances. Your support in providing clothing not only meets a fundamental need but also empowers me to pursue opportunities and engage with society with renewed hope and dignity."
				field6="1"
				orgImg={MaleIcon}
				itemImg={Shirt}
				isBlood={false}
			/>

			<DonationCard
				field1="Emad"
				field2="Category: School Supplies"
				field3="Hurghada"
				field4="High"
				field5="Access to school supplies is essential for students to excel academically and reach their full potential. As a student in need of school supplies, I rely on essential items such as notebooks, pencils, and textbooks to participate in class activities and complete assignments. Your donation of school supplies will provide me and other students with the tools we need to succeed in school and build a brighter future."
				field6="1"
				orgImg={MaleIcon}
				itemImg={SchoolSupplies}
				isBlood={false}
			/>

			<DonationCard
				field1="Anonymous User"
				field2="Category: Book Requests"
				field3="Suez"
				field4="Medium"
				field5="Access to books is essential for fostering a love of reading and expanding knowledge. As an individual seeking access to books, I am eager to explore new worlds, learn new ideas, and broaden my horizons through reading. Your donation of books will provide me and others with opportunities for intellectual growth, personal development, and lifelong learning. Together, we can unlock the power of literacy and inspire a passion for reading in our community."
				field6="1"
				orgImg={ProfileIcon}
				itemImg={Books}
				isBlood={false}
			/>

			<DonationCard
				field1="Mohamed"
				field2="Category: Toy Donation"
				field3="Asyut"
				field4="Low"
				field5="As a child in need of toys, play is an essential part of my development, happiness, and well-being. Toys provide me with opportunities for creativity, imagination, and social interaction, enriching my childhood experiences and fostering positive growth. Your donation of toys will bring joy, laughter, and moments of play to children like me, creating lasting memories and brightening our days during challenging times."
				field6="1"
				orgImg={MaleIcon}
				itemImg={Toys}
				isBlood={false}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="New Cairo"
				field4="High"
				field5="Blood Type: O+"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="New Cairo"
				field4="Low"
				field5="Blood Type: A+"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>

			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="Giza"
				field4="Medium"
				field5="Blood Type: AB+"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="Giza"
				field4="Medium"
				field5="Blood Type: B-"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="Maadi"
				field4="Medium"
				field5="Blood Type: AB"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="Maadi"
				field4="Medium"
				field5="Blood Type: B"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="Nasr City"
				field4="Medium"
				field5="Blood Type: O+"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="Nasr City"
				field4="Medium"
				field5="Blood Type: O-"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="Nasr City"
				field4="Medium"
				field5="Blood Type: B+"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="New Cairo"
				field4="Medium"
				field5="Blood Type: AB+"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="New Cairo"
				field4="Medium"
				field5="Blood Type: A-"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
			<DonationCard
				field1="Alnas Hospital"
				field2="Blood Donations"
				field3="New Cairo"
				field4="Medium"
				field5="Blood Type: O"
				field6="100 Liters"
				orgImg={Alnas}
				isBlood={true}
			/>
		</div>
	);
};

export default RegularDonationParent;
