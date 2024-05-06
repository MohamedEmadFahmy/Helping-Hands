/* eslint-disable no-unused-vars */

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Import your components
import Donorregisteration from "./pages/Donorregisteration";
import MainLayout from "./layouts/MainLayout";
import SelectDonorTypePage from "./pages/SelectDonorTypePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/">
          {/* Use Donorregisteration here instead of DonorDetails */}
          <Route index element={<Donorregisteration />} />
          <Route path="/select-type" element={<SelectDonorTypePage />} />
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
