/* eslint-disable no-unused-vars */
import OrganizationCards from "../components/OrganizationCards";
import organizationInfo from "../organization-accounts.json";
import { useState } from "react";

const AdminOrganizationAccounts = () => {
	const [organizationsList, setOrganizationsList] =
		useState(organizationInfo);

	const handleSearchChange = (e) => {
		const searchValue = e.target.value;
		const filteredOrganizationInfo = organizationInfo.filter(
			(organization) =>
				organization.OrganizationName.toLowerCase().includes(
					searchValue.toLowerCase()
				)
		);

		setOrganizationsList(filteredOrganizationInfo);
	};

	return (
		<div className=" bg-primaryShades-200 p-10 gap-10 w-full min-h-[90vh] flex flex-col items-center justify-center">
			<h1 className="text-5xl font-bold text-center font-mono text-white">
				Organization Accounts
			</h1>

			<input
				type="text"
				placeholder="Search"
				className="w-1/3 p-3 rounded-lg"
				onChange={handleSearchChange}
			/>
			<OrganizationCards
				organizationsList={organizationsList}
				handleSearchChange={handleSearchChange}
			/>
		</div>
	);
};

export default AdminOrganizationAccounts;
