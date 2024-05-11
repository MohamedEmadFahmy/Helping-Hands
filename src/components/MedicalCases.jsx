import CaseCard from './CaseCard';

const MedicalCases = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
      <CaseCard field1="John" field2="Surgery" field3="New York" />
      <CaseCard field1="kr" field2="Dentist" field3="London" />
      <CaseCard field1="kr" field2="Andf Weshy" field3="Rehab" />
    </div>
  );
};

export default MedicalCases;
