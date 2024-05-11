import DonationCard from './DonationCard';
import Insulin from '../assets/DonationCardsImages/insulin.jfif';
import MaleIcon from '../assets/DonationCardsImages/MaleIcon.jfif';
import Oven from '../assets/DonationCardsImages/Oven.jfif';
import ProfileIcon from '../assets/DonationCardsImages/profileIcon.png';
import Shirt from '../assets/DonationCardsImages/Shirt.jfif';

const RegularDonationParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
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
        field5="
As an individual seeking to enhance my culinary skills and nourish myself and my loved ones, having access to an oven is essential. With its versatile cooking capabilities, an oven serves as the cornerstone of my kitchen, enabling me to prepare a wide array of nutritious and flavorful meals. From baking wholesome bread to roasting hearty vegetables and creating indulgent desserts, an oven empowers me to explore my creativity in the kitchen and cultivate a healthier lifestyle. Its reliable performance ensures that every dish is cooked to perfection, fostering joy, satisfaction, and togetherness around the dinner table."
        field6="1"
        orgImg={MaleIcon}
        itemImg={Oven}
        isBlood={false}
      />
      <DonationCard
        field1="Anonymous User"
        field2="Category: Medicine"
        field3="Cairo"
        field4="High"
        field5="As an individual living with diabetes, access to insulin medication is not just a matter of convenience but a lifeline for managing my health and well-being. Insulin plays a pivotal role in regulating my blood sugar levels, allowing me to lead a fulfilling and active life despite my condition. Its timely administration ensures stability and prevents potentially life-threatening complications associated with diabetes. By ensuring consistent access to insulin medication, I can confidently navigate daily activities, pursue my goals, and enjoy quality time with my loved ones, all while maintaining optimal health and vitality."
        field6="10"
        orgImg={ProfileIcon}
        itemImg={Insulin}
        isBlood={false}
      />
    </div>
  );
};

export default RegularDonationParent;
