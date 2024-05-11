import { useState } from "react";

const OrganizationAccount = () => {
	const [username, setUsername] = useState("Org123");
	const [firstname, setFirstname] = useState("Youssof");
	const [lastname, setLastname] = useState("Ahmed");
	const [isFirstnameEditing, setIsFirstnameEditing] = useState(false);
	const [isLastnameEditing, setIsLastnameEditing] = useState(false);
	const [dob, setDob] = useState("1990-01-01");
	const [isDobEditing, setIsDobEditing] = useState(false);
	const [loc, setLoc] = useState("6th October City, Giza, Egypt");
	const [isLocEditing, setIsLocEditing] = useState(false);
	const [gender, setGender] = useState("Male");
	const [isGenderEditing, setIsGenderEditing] = useState(false);
	const [orgName, setOrgName] = useState("Example Organization");
	const [googleMapsLink, setGoogleMapsLink] = useState(
		"https://maps.google.com/example"
	);
	const [orgType, setOrgType] = useState("Non-Profit");
	const [email, setEmail] = useState("example@example.com");
	const [password, setPassword] = useState("12345678");
	const [phoneNumber, setPhoneNumber] = useState("00000000000");
	const [isUsernameEditing, setIsUsernameEditing] = useState(false);
	const [isOrgNameEditing, setIsOrgNameEditing] = useState(false);
	const [isGoogleMapsLinkEditing, setIsGoogleMapsLinkEditing] =
		useState(false);
	const [isOrgTypeEditing, setIsOrgTypeEditing] = useState(false);
	const [isEmailEditing, setIsEmailEditing] = useState(false);
	const [isPasswordEditing, setIsPasswordEditing] = useState(false);
	const [isPhoneNumberEditing, setIsPhoneNumberEditing] = useState(false);

	const toggleUsernameEditing = () => {
		setIsUsernameEditing(!isUsernameEditing);
	};

	const toggleFirstnameEditing = () => {
		setIsFirstnameEditing(!isFirstnameEditing);
	};
	const toggleLastnameEditing = () => {
		setIsLastnameEditing(!isLastnameEditing);
	};

	const toggleDobEditing = () => {
		setIsDobEditing(!isDobEditing);
	};

	const toggleLocEditing = () => {
		setIsLocEditing(!isLocEditing);
	};

	const toggleGenderEditing = () => {
		setIsGenderEditing(!isGenderEditing);
	};

	const toggleOrgNameEditing = () => {
		setIsOrgNameEditing(!isOrgNameEditing);
	};

	const toggleGoogleMapsLinkEditing = () => {
		setIsGoogleMapsLinkEditing(!isGoogleMapsLinkEditing);
	};

	const toggleOrgTypeEditing = () => {
		setIsOrgTypeEditing(!isOrgTypeEditing);
	};

	const toggleEmailEditing = () => {
		setIsEmailEditing(!isEmailEditing);
	};

	const togglePasswordEditing = () => {
		setIsPasswordEditing(!isPasswordEditing);
	};

	const togglePhoneNumberEditing = () => {
		setIsPhoneNumberEditing(!isPhoneNumberEditing);
	};

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleFirstnameChange = (e) => {
		setFirstname(e.target.value);
	};
	const handleLastnameChange = (e) => {
		setLastname(e.target.value);
	};

	const handleDobChange = (e) => {
		setDob(e.target.value);
	};

	const handleLocChange = (e) => {
		setLoc(e.target.value);
	};

	const handleGenderChange = (e) => {
		setGender(e.target.value);
	};

	const handleOrgNameChange = (e) => {
		setOrgName(e.target.value);
	};

	const handleGoogleMapsLinkChange = (e) => {
		setGoogleMapsLink(e.target.value);
	};

	const handleOrgTypeChange = (e) => {
		setOrgType(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const isValidPhoneNumber = (phoneNumber) => {
		return /^\d{11}$/.test(phoneNumber);
	};

	const handleEmailSave = () => {
		if (!isValidEmail(email)) {
			alert("Invalid email format!");
			return;
		}
		setIsEmailEditing(false);
	};

	const handlePhoneNumberSave = () => {
		if (!isValidPhoneNumber(phoneNumber)) {
			alert("Invalid phone number format!");
			return;
		}
		setIsPhoneNumberEditing(false);
	};

	const handlePasswordSave = () => {
		setIsPasswordEditing(false);
	};

	const renderPersonalInformation = () => {
		return (
			<div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/2">
				<h2 className="text-lg font-bold mb-4">Personal Information</h2>
				<div className="border-b border-gray-400 mb-4 pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">
								Account Username:
							</p>
							{isUsernameEditing ? (
								<input
									type="text"
									value={username}
									onChange={handleUsernameChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								/>
							) : (
								<p className="text-gray-800 font-semibold">
									{username}
								</p>
							)}
						</div>
						<button
							onClick={toggleUsernameEditing}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isUsernameEditing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
				<div className="border-b border-gray-400 mb-4 pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">First Name:</p>
							{isFirstnameEditing ? (
								<input
									type="text"
									value={firstname}
									onChange={handleFirstnameChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								/>
							) : (
								<p className="text-gray-800 font-semibold ">
									{firstname}
								</p>
							)}
							<button
								onClick={toggleFirstnameEditing}
								className=" ml-60 text-blue-600 hover:text-blue-700 focus:outline-none"
							>
								{isFirstnameEditing ? "Save" : "Edit"}
							</button>
							<p className="text-gray-600 ml-10 mr-2">
								Last Name:
							</p>
							{isLastnameEditing ? (
								<input
									type="text"
									value={lastname}
									onChange={handleLastnameChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								/>
							) : (
								<p className="text-gray-800 font-semibold">
									{lastname}
								</p>
							)}
						</div>
						<button
							onClick={toggleLastnameEditing}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isLastnameEditing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
				<div className="border-b border-gray-400 mb-4 pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">Date of Birth:</p>
							{isDobEditing ? (
								<input
									type="date"
									value={dob}
									onChange={handleDobChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								/>
							) : (
								<p className="text-gray-800 font-semibold">
									{dob}
								</p>
							)}
						</div>
						<button
							onClick={toggleDobEditing}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isDobEditing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
				<div className="border-b border-gray-400 mb-4 pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">Location:</p>
							{isLocEditing ? (
								<input
									type="text"
									value={loc}
									onChange={handleLocChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								/>
							) : (
								<p className="text-gray-800 font-semibold">
									{loc}
								</p>
							)}
						</div>
						<button
							onClick={toggleLocEditing}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isLocEditing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
				<div className="mb-0 pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">Gender:</p>
							{isGenderEditing ? (
								<select
									value={gender}
									onChange={handleGenderChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							) : (
								<p className="text-gray-800 font-semibold">
									{gender}
								</p>
							)}
						</div>
						<button
							onClick={toggleGenderEditing}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isGenderEditing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
			</div>
		);
	};

	const renderSecurityInformation = () => {
		return (
			<div className="bg-gray-200 p-4 rounded-lg shadow-md mt-12 w-1/2">
				<h2 className="text-lg font-bold mb-4">Security Information</h2>
				<div className="border-b border-gray-400 mb-4 pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">Email:</p>
							{isEmailEditing ? (
								<input
									type="email"
									value={email}
									onChange={handleEmailChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								/>
							) : (
								<p className="text-gray-800 font-semibold">
									{email}
								</p>
							)}
						</div>
						<button
							onClick={
								isEmailEditing
									? handleEmailSave
									: toggleEmailEditing
							}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isEmailEditing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
				<div className="border-b border-gray-400 mb-4 pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">Password:</p>
							{isPasswordEditing ? (
								<input
									type="text"
									value={password}
									onChange={handlePasswordChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								/>
							) : (
								<p className="text-gray-800 font-semibold">
									********
								</p>
							)}
						</div>
						<button
							onClick={
								isPasswordEditing
									? handlePasswordSave
									: togglePasswordEditing
							}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isPasswordEditing ? "Save" : "Edit/View"}
						</button>
					</div>
				</div>
				<div className="pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">Phone Number:</p>
							{isPhoneNumberEditing ? (
								<input
									type="text"
									value={phoneNumber}
									onChange={handlePhoneNumberChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								/>
							) : (
								<p className="text-gray-800 font-semibold">
									{phoneNumber}
								</p>
							)}
						</div>
						<button
							onClick={
								isPhoneNumberEditing
									? handlePhoneNumberSave
									: togglePhoneNumberEditing
							}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isPhoneNumberEditing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
			</div>
		);
	};
	const renderOrganizationInformation = () => {
		return (
			<div className="bg-gray-200 p-4 rounded-lg shadow-md mt-12 w-1/2">
				<h2 className="text-lg font-bold mb-4">
					Organization Information
				</h2>
				<div className="border-b border-gray-400 mb-4 pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">
								Organization Name:
							</p>
							{isOrgNameEditing ? (
								<input
									type="text"
									value={orgName}
									onChange={handleOrgNameChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								/>
							) : (
								<p className="text-gray-800 font-semibold">
									{orgName}
								</p>
							)}
						</div>
						<button
							onClick={toggleOrgNameEditing}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isOrgNameEditing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
				<div className="border-b border-gray-400 mb-4 pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">
								Google Maps Link:
							</p>
							{isGoogleMapsLinkEditing ? (
								<input
									type="text"
									value={googleMapsLink}
									onChange={handleGoogleMapsLinkChange}
									className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
								/>
							) : (
								<p className="text-gray-800 font-semibold">
									{googleMapsLink}
								</p>
							)}
						</div>
						<button
							onClick={toggleGoogleMapsLinkEditing}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isGoogleMapsLinkEditing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
				<div className="pb-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<p className="text-gray-600 mr-2">
								Organization Type:
							</p>
							{isOrgTypeEditing ? (
								<select
									value={orgType}
									onChange={handleOrgTypeChange}
									className="rounded-md px-2 py-1 focus:outline-none"
								>
									<option value="School">School</option>
									<option value="Hospital">Hospital</option>
									<option value="Church">Church</option>
									<option value="Mosque">Mosque</option>
									<option value="Non-Profit">
										Non-Profit
									</option>
								</select>
							) : (
								<p className="text-gray-800 font-semibold">
									{orgType}
								</p>
							)}
						</div>
						<button
							onClick={toggleOrgTypeEditing}
							className="text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							{isOrgTypeEditing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="flex flex-col justify-center items-center w-screen bg-secondary p-10">
			<h1 className="text-3xl mt-60 font-bold mb-10">
				Welcome, {username}
			</h1>

			{renderPersonalInformation()}
			{renderSecurityInformation()}
			{renderOrganizationInformation()}
		</div>
	);
};

export default OrganizationAccount;
