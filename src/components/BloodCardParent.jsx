import Alnas from '../assets/DonationCardsImages/Alnas.png';
import DonationCard from './DonationCard';

const BloodCardParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
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

export default BloodCardParent;
