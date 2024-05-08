import React, { useState } from "react";

const OrganizationRegister = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-gradient-to-tr from-primaryShades-300 to-primaryShades-500 rounded-lg flex flex-col items-center justify-center pt-8 pb-8 gap-5 w-1/2 ">
      <div className="flex justify-center m-9">
        <h1 className="text-3xl font-semibold text-white">
          Donor Registration
        </h1>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Location..."
          className="rounded-md p-2 w-60"
        />
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Speciality..."
          className="rounded-md p-2 w-60"
        />
      </div>
      <div className="flex justify-center">
        <label
          htmlFor="file-upload"
          className="bg-white text-blue-500 font-bold rounded-md cursor-pointer p-2 w-60 text-center"
        >
          <input id="file-upload" type="file" className="hidden" />
          Upload Document
        </label>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="checkbox"
          id="terms"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="rounded-md p-0.5"
        />
        <label htmlFor="terms" className="ml-2 text-white">
          I agree with terms and conditions
        </label>
      </div>{" "}
      <button className="bg-white rounded-md pr-9 pl-9 pt-3 pb-3  w-auto ">
        submit
      </button>
      <div className="text-white">
        <button>Privacy Policy</button>
      </div>
    </div>
  );
};

export default OrganizationRegister;
