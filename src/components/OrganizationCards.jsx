/* eslint-disable react/prop-types */
import OrganizationCard from "./OrganizationCard"; // assuming you have this component imported

const OrganizationList = ({ organizationsList }) => {
	return (
		<div className="flex flex-col items-center justify-center w-10/12 h-full gap-5">
			{organizationsList.map((organization, index) => (
				<OrganizationCard
					key={index}
					OrganizationName={organization.OrganizationName}
					OrganizationType={organization.OrganizationType}
					OrganizationArea={organization.OrganizationArea}
					OrganizationImage={organization.OrganizationImage}
					OrganizationPhoneNumber={
						organization.OrganizationPhoneNumber
					}
				/>
			))}
		</div>
	);
};

export default OrganizationList;
