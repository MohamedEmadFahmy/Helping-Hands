import AnimalShelterImg from '../assets/DonationCardsImages/AnimalShelter.png';
import Blankets from '../assets/DonationCardsImages/MedicalBlankets.jfif';
import BloodPressure from '../assets/DonationCardsImages/BloodPressure.jfif';
import DonationCard from './DonationCard';
import FoodBankImg from '../assets/DonationCardsImages/FoodBank.png';
import HygieneKitImg from '../assets/DonationCardsImages/HygieneKit.jfif';
import NonPerishableFoodImg from '../assets/DonationCardsImages/Food.jfif';
import Org57357 from '../assets/DonationCardsImages/HospitalLogo.png';
import Orman from '../assets/DonationCardsImages/Orman.png';
import PetFoodImg from '../assets/DonationCardsImages/petFood.jfif';
import SchoolImg from '../assets/DonationCardsImages/School.png';
import SchoolSuppliesImg from '../assets/DonationCardsImages/SchoolSupplies.jfif';
import Syringe from '../assets/DonationCardsImages/Syringe.jfif';
import WomensShelterImg from '../assets/DonationCardsImages/WomenShelter.png';

const OrganizationCardParent = () => {
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
    </div>
  );
};

export default OrganizationCardParent;
