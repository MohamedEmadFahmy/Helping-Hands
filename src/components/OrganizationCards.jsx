/* eslint-disable react/prop-types */
import OrganizationCard from "./OrganizationCard"; // assuming you have this component imported

const OrganizationList = ({
	isAdmin = true,
	organizationsList,
	handleDelete,
}) => {
	return (
		<div className="flex flex-col items-center justify-center w-10/12 h-full gap-5">
			{organizationsList.map((organization, index) => (
				<OrganizationCard
					isAdmin={isAdmin}
					key={index}
					OrganizationIndex={index}
					OrganizationName={organization.OrganizationName}
					OrganizationType={organization.OrganizationType}
					OrganizationArea={organization.OrganizationArea}
					OrganizationImage={organization.OrganizationImage}
					OrganizationPhoneNumber={
						organization.OrganizationPhoneNumber
					}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
};

export default OrganizationList;
