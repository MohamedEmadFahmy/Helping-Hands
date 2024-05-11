import Blankets from '../assets/DonationCardsImages/MedicalBlankets.jfif';
import BloodPressure from '../assets/DonationCardsImages/BloodPressure.jfif';
import DonationCard from './DonationCard';
import Org57357 from '../assets/DonationCardsImages/HospitalLogo.png';
import Orman from '../assets/DonationCardsImages/Orman.png';
import Syringe from '../assets/DonationCardsImages/Syringe.jfif';

const OrganizationCardParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
      <DonationCard
        field1="57357"
        field2="Medical Blankets"
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
        field2="Blood Pressure Monitors"
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
        field2="Medical Syringes"
        field3="Nasr City"
        field4="High"
        field5="As an organization dedicated to healthcare excellence, access to medical syringes is indispensable for delivering precise medication dosages and lifesaving treatments to our patients. These syringes serve as indispensable tools in administering vaccines, medications, and therapeutic interventions, ensuring the safety and efficacy of our medical procedures. By maintaining a reliable supply of medical syringes, we uphold the highest standards of patient care, empowering our healthcare professionals to provide accurate and compassionate treatment tailored to each patient's needs."
        field6="300"
        orgImg={Orman}
        itemImg={Syringe}
        isBlood={false}
      />
    </div>
  );
};

export default OrganizationCardParent;
