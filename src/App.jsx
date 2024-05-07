/* eslint-disable no-unused-vars */
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import SelectDonorTypePage from "./pages/SelectDonorTypePage";
import DonationCreationPage from "./pages/DonationCreationPage";
import AdminAccountPage from "./pages/AdminAccountPage";
import DonorAccountPage from "./pages/DonorAccountPage";
import DonorDeliveryPage from "./pages/DonorDeliveryPage";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			// <Route path="/" element={<MainLayout />}>
			<>
				<Route path="/">
					<Route index element={<LoginPage />} />
					<Route
						path="/select-type"
						element={<SelectDonorTypePage />}
					/>
					<Route path="/donation-create" element={<DonationCreationPage />} />
					<Route path="/admin-account" element={<AdminAccountPage />} />
					<Route path="/donor-account" element={<DonorAccountPage />} />
					<Route path="/donor-delivery" element={<DonorDeliveryPage />} />
					<Route element={<MainLayout />}>
						<Route path="/hi" element={<SelectDonorTypePage />} />
					</Route>
				</Route>
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
