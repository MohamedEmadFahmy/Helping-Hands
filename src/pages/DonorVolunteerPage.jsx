import MedicalVolParent from '../components/MedicalVolParent';
import TeachingVolParent from '../components/TeachingVolParent';
import { useState } from 'react';

const DonorVolunteerPage = () => {
  const [viewDoctor, setDoctor] = useState(false);
  const [viewTeacher, setTeacher] = useState(true);

  return (
    <div className="h-[90vh] w-screen bg-secondaryShades-500 flex flex-col  items-center gap-10 overflow-y-scroll ">
      <div className="flex justify-start gap-5 mt-5 ">
        <button
          className="bg-primaryShades-500 rounded-lg px-10 py-2"
          onClick={() => {
            setTeacher(true);
            setDoctor(false);
          }}
        >
          Teaching Cases
        </button>
        <button
          className="bg-primaryShades-500 rounded-lg px-10 py-2"
          onClick={() => {
            setTeacher(false);
            setDoctor(true);
          }}
        >
          Medical Cases
        </button>
      </div>
      {viewDoctor && <MedicalVolParent />}
      {viewTeacher && <TeachingVolParent />}
    </div>
  );
};

export default DonorVolunteerPage;
