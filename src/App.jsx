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
import PageNotFound from "./pages/PageNotFound";

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

					<Route element={<MainLayout />}>
						<Route path="/hi" element={<SelectDonorTypePage />} />
					</Route>

					<Route path="*" element={<PageNotFound />}></Route>
				</Route>
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
