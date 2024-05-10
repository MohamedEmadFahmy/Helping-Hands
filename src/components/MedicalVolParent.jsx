import MedicalVol from './MedicalVol.jsx';

const MedicalVolParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
      <MedicalVol name="John" description="Math Tutor" location="New York" />
      <MedicalVol name="kr" description="English Teacher" location="London" />
      <MedicalVol
        name="Michael"
        description="Science Instructor"
        location="San Francisco"
      />
    </div>
  );
};

export default MedicalVolParent;
