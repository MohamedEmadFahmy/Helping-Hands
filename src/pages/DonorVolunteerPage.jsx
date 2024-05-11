/* eslint-disable no-unused-vars */

import DonorVolunteerRegister from "../components/DonorVolunteerRegister";
import { Link } from "react-router-dom";
import MedicalCases from "../components/MedicalCases";
import TeachingCases from "../components/TeachingCases";
import { useState } from "react";

const DonorVolunteerPage = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);

  const [viewDoctor, setDoctor] = useState(isDoctor);
  const [viewTeacher, setTeacher] = useState(isTeacher);

  return (
    <div className=" min-h-[90vh] w-full bg-secondaryShades-500 flex flex-col items-center gap-10 ">
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

      {!viewDoctor && !viewTeacher && <DonorVolunteerRegister />}
    </div>
  );
};

export default DonorVolunteerPage;
