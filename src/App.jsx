/* eslint-disable no-unused-vars */

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import DonorDetails from './pages/DonorDetails';
import LoginPage from './pages/LoginPage';
import MainLayout from './layouts/MainLayout';
import SelectDonorTypePage from './pages/SelectDonorTypePage';
import  AdminManagment from  './pages/AdminManagment';








const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route path="/" element={<MainLayout />}>
      <>
        <Route path="/">
          <Route index element={<AdminManagment/>} />
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
