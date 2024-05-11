/* eslint-disable no-unused-vars */

import DonorVolunteerRegister from '../components/DonorVolunteerRegister';
import { Link } from 'react-router-dom';
import MedicalCases from '../components/MedicalCases';
import TeachingCases from '../components/TeachingCases';
import { useState } from 'react';

const DonorVolunteerPage = () => {
  const [isDoctor, setIsDoctor] = useState(true);
  const [isTeacher, setIsTeacher] = useState(true);

  const [viewDoctor, setDoctor] = useState(isDoctor);
  const [viewTeacher, setTeacher] = useState(isTeacher);

  return (
    <div className="h-[90vh] w-screen bg-secondaryShades-500 flex flex-col  items-center gap-10 overflow-y-scroll ">
      <div className="flex justify-start gap-5 mt-5 ">
        {isDoctor && (
          <button
            className="bg-primaryShades-500 rounded-lg px-10 py-2"
            onClick={() => {
              setDoctor(true);
              setTeacher(false);
            }}
          >
            Medical Cases
          </button>
        )}
        {isTeacher && (
          <button
            className="bg-primaryShades-500 rounded-lg px-10 py-2"
            onClick={() => {
              setDoctor(false);
              setTeacher(true);
            }}
          >
            Teaching Cases
          </button>
        )}
      </div>
      {viewDoctor && <MedicalCases />}
      {viewTeacher && <TeachingCases />}
      {!viewDoctor && !viewTeacher && (
        <p>
          Click{' '}
          <Link className="italic" to="/other-page">
            here
          </Link>{' '}
          to go register as a volunteer.
        </p>
      )}
    </div>
  );
};

export default DonorVolunteerPage;
