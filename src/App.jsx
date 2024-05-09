/* eslint-disable no-unused-vars */

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

// Import your components

import DonorPageLayout from "./layouts/DonorPageLayout";
import SelectDonorTypePage from "./pages/SelectDonorTypePage";
import DonorHomePage from "./pages/DonorHomePage";
import DonorOrganizationsPage from "./pages/DonorOrganizationsPage";
import DonorDonatePage from "./pages/DonorDonatePage";
import DonorVolunteerPage from "./pages/DonorVolunteerPage";
import LoginPage from "./pages/LoginPage";
import OrganisationDonorDetailsPage from "./pages/OrganisationDonorDetailsPage";
import AdminManagmentPage from "./pages/AdminManagmentPage";
import DonationCreationPage from "./pages/DonationCreationPage";
import AdminAccountPage from "./pages/AdminAccountPage";
import OrganizationAccountPage from "./pages/OrganizationAccountPage";
import DonorAccountPage from "./pages/DonorAccountPage";
import DonorAccount from "./components/DonorAccount";
import DonorDeliveryPage from "./pages/DonorDeliveryPage";
import OrganizationDeliveryPage from "./pages/OrganizationDeliveryPage";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			// <Route path="/" element={<DonorPageLayout />}>
			<>
				<Route path="/" index element={<LoginPage />} />

				<Route path="/select-type" element={<SelectDonorTypePage />} />

				<Route element={<DonorPageLayout />}>
					<Route
						path="/donor/home"
						element={<DonorHomePage />}
					></Route>
					<Route
						path="/donor/organizations"
						element={<DonorOrganizationsPage />}
					/>
					<Route path="/donor/donate" element={<DonorDonatePage />} />
					<Route
						path="/donor/volunteer"
						element={<DonorVolunteerPage />}
					/>
					<Route
						path="/donor/donation-create"
						element={<DonationCreationPage />}
					/>
					<Route path="/donor/account" element={<DonorAccountPage />} />
					<Route
						path="/donor/deliveries"
						element={<DonorDeliveryPage />}
					/>
				</Route>

					<Route
						path="/organization/organization-delivery"
						element={<OrganizationDeliveryPage />}
					/>
				<Route
					path="/organisation/donor-details"
					element={<OrganisationDonorDetailsPage />}
				/>

				<Route
					path="/admin/account-management"
					element={<AdminManagmentPage />}
				/>
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
