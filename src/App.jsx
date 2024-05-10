/* eslint-disable no-unused-vars */

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import AdminDonorAccounts from "./pages/AdminDonorAccounts";
import AdminOrganizationAccounts from "./pages/AdminOrganizationAccounts";
import DonationCreationPage from "./pages/DonationCreationPage";
import DonorAccount from "./components/DonorAccount";
import DonorDeliveriesPage from "./pages/DonorDeliveriesPage";
import DonorDonatePage from "./pages/DonorDonatePage";
import DonorHomePage from "./pages/DonorHomePage";
import DonorOrganizationsPage from "./pages/DonorOrganizationsPage";
import DonorDeliveriesPage from "./pages/DonorDeliveriesPage";
import DonorPageLayout from "./layouts/DonorPageLayout";
import DonorVolunteerPage from "./pages/DonorVolunteerPage";
import LoginPage from "./pages/LoginPage";
import OrganisationDonorDetailsPage from "./pages/OrganisationDonorDetailsPage";
import SelectDonorTypePage from "./pages/SelectDonorTypePage";
// Import your components

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
					<Route
						path="/donor/deliveries"
						element={<DonorDeliveriesPage />}
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
					<Route path="/donor/account" element={<DonorAccount />} />
					<Route
						path="/admin/donor-accounts"
						element={<AdminDonorAccounts />}
					/>
					<Route
						path="/admin/organization-accounts"
						element={<AdminOrganizationAccounts />}
					/>
				</Route>

				<Route
					path="/organisation/donor-details"
					element={<OrganisationDonorDetailsPage />}
				/>
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
