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
import DonorDeliveriesPage from "./pages/DonorDeliveriesPage";
import DonorDonatePage from "./pages/DonorDonatePage";
import DonorVolunteerPage from "./pages/DonorVolunteerPage";
import LoginPage from "./pages/LoginPage";
import DonorDetails from "./pages/DonorDetails";
import AdminManagment from "./pages/AdminManagment";
import DonationCreationPage from "./pages/DonationCreationPage";
import DonorAccountPage from "./pages/DonorAccountPage";
import DonorAccount from "./components/DonorAccount";
import DonorDeliveryPage from "./pages/DonorDeliveryPage";

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
						path="/donor-delivery"
						element={<DonorDeliveryPage />}
					/>
				</Route>

				<Route
					path="/organisation/donor-details"
					element={<DonorDetails />}
				/>

				<Route
					path="/admin/account-management"
					element={<AdminManagment />}
				/>
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
