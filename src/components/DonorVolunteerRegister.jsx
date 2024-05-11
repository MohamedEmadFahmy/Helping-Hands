import { useState } from "react";

const OrganizationRegister = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [mapVisible, setMapVisible] = useState(false); // State to control the visibility of the map

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTypeButtonClick = (type) => {
    setSelectedType(type === selectedType ? null : type);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const toggleMapVisibility = () => {
    setMapVisible(!mapVisible); // Toggle the visibility state of the map
  };

  const handleMapMouseDown = () => {
    setMapVisible(false); // Turn off the map when the map is pressed
  };

  return (
    <div className="bg-gradient-to-tr from-primaryShades-300 to-primaryShades-500 rounded-lg flex flex-col items-center justify-center pt-8 pb-8 gap-5 w-1/2 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-white mb-4">Registration</h1>
        <div className="flex ml-4 mb-4">
          <button
            className={`mx-2 px-4 py-2 rounded-md ${
              selectedType === "teacher" ? "bg-blue-900 text-white" : ""
            } border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out ${
              selectedType === "teacher" ? "scale-125" : ""
            }`}
            onClick={() => handleTypeButtonClick("teacher")}
          >
            Teacher
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-md ${
              selectedType === "doctor" ? "bg-blue-900 text-white" : ""
            } border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out ${
              selectedType === "doctor" ? "scale-125" : ""
            }`}
            onClick={() => handleTypeButtonClick("doctor")}
          >
            Doctor
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Address, area, government..."
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
      {selectedType === "teacher" && (
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter teaching subjects.."
            className="rounded-md p-2 w-60"
          />
        </div>
      )}
      <div className="flex justify-center">
        <label
          htmlFor="file-upload"
          className="bg-white text-blue-500 font-bold rounded-md cursor-pointer p-2 w-60 text-center"
        >
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          {selectedFile ? selectedFile.name : "Upload Document"}
        </label>
      </div>
      <div className="bg-white text-blue-500 font-bold rounded-md cursor-pointer p-2 w-60 text-center ">
        <button onClick={toggleMapVisibility}>Toggle Map</button>
      </div>
      {mapVisible && (
        <div className="flex justify-center w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.150465912957!2d31.438874664226326!3d29.988423417037883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d23fc96eed7%3A0x364e0a19bd725939!2sGUC%20gate%203!5e0!3m2!1sen!2seg!4v1715007489098!5m2!1sen!2seg"
            width="800"
            height="600"
            loading="lazy"
            title="Google Map"
            style={{ border: "0px" }}
            onMouseDown={handleMapMouseDown} // Add event listener to handle map mouse down
          ></iframe>
        </div>
      )}
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
      <button className={"bg-white rounded-md pr-9 pl-9 pt-3 pb-3 w-auto"}>
        Submit
      </button>
      <div className="text-white">
        <button>Privacy Policy</button>
      </div>
    </div>
  );
};

export default OrganizationRegister;
