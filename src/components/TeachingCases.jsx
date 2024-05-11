import CaseCard from './CaseCard';

const TeachingCases = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
      <CaseCard field1="John" field2="Math Tutor" field3="New York" />
      <CaseCard field1="Sarah" field2="English Teacher" field3="London" />
      <CaseCard
        field1="Michael"
        field2="Science Instructor"
        field3="San Francisco"
      />
    </div>
  );
};

export default TeachingCases;
