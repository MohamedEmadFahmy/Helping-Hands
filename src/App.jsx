/* eslint-disable no-unused-vars */

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

// Import your components
import Donorregisteration from "./pages/Donorregisteration";
import DonorPageLayout from "./layouts/DonorPageLayout";
import SelectDonorTypePage from "./pages/SelectDonorTypePage";
import DonorHomePage from "./pages/DonorHomePage";
import DonorOrganizationsPage from "./pages/DonorOrganizationsPage";
import DonorDeliveriesPage from "./pages/DonorDeliveriesPage";
import DonorDonatePage from "./pages/DonorDonatePage";
import DonorVolunteerPage from "./pages/DonorVolunteerPage";
import LoginPage from "./pages/LoginPage";

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
				</Route>

				<Route element={<DonorPageLayout />}>
					<Route
						path="/donor/organizations"
						element={<DonorOrganizationsPage />}
					/>
				</Route>
				<Route element={<DonorPageLayout />}>
					<Route
						path="/donor/deliveries"
						element={<DonorDeliveriesPage />}
					/>
				</Route>
				<Route element={<DonorPageLayout />}>
					<Route path="/donor/donate" element={<DonorDonatePage />} />
				</Route>
				<Route element={<DonorPageLayout />}>
					<Route
						path="/donor/volunteer"
						element={<DonorVolunteerPage />}
					/>
				</Route>
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
