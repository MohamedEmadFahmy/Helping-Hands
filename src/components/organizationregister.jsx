import React, { useState } from "react";

const OrganizationRegister = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-gradient-to-tr from-primaryShades-300 to-primaryShades-500 rounded-lg flex flex-col items-center justify-center pt-8 pb-8 gap-5 w-1/2 m-8">
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
        <input
          type="text"
          placeholder="Enter text..."
          className="rounded-md p-2 w-60 h-30"
        />
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
      </div>
      <div className="flex ">
        <button className="bg-white rounded-md">submit</button>
      </div>
      <div className="text-white">
        <button>Privacy Policy</button>
      </div>
    </div>
  );
};

export default OrganizationRegister;
