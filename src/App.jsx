/* eslint-disable no-unused-vars */

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import DonorPageLayout from "./layouts/DonorPageLayout";
import OrganizationPageLayout from "./layouts/OrganizationPageLayout";

import AdminDonorAccounts from "./pages/AdminDonorAccounts";
import AdminOrganizationAccounts from "./pages/AdminOrganizationAccounts";
import DonorAccount from "./components/DonorAccount";
import DonorDeliveriesPage from "./pages/DonorDeliveriesPage";
import DonorDonatePage from "./pages/DonorDonatePage";
import DonorHomePage from "./pages/DonorHomePage";
import DonorOrganizationsPage from "./pages/DonorOrganizationsPage";
import DonorVolunteerPage from "./pages/DonorVolunteerPage";
import LoginPage from "./pages/LoginPage";
import SelectDonorTypePage from "./pages/SelectDonorTypePage";

import OrganizationDonationsPage from "./pages/OrganizationDonationsPage";
import OrganizationDeliveryPage from "./pages/OrganizationDeliveryPage";
import OrganizationAccountPage from "./pages/OrganizationAccountPage";
import OrganizationDonationCreationPage from "./pages/OrganizationDonationCreationPage";
import OrganizationHomePage from "./pages/OrganizationHomePage";
import AdminViewSubmissions from "./pages/AdminViewSubmissions";

// Import your components

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route path="/" element={<DonorPageLayout />}>
      <>
        <Route path="/" index element={<LoginPage />} />

        <Route path="/select-type" element={<SelectDonorTypePage />} />

        <Route element={<DonorPageLayout />}>
          <Route path="/donor/home" element={<DonorHomePage />}></Route>
          <Route
            path="/donor/organizations"
            element={<DonorOrganizationsPage />}
          />
          <Route path="/donor/deliveries" element={<DonorDeliveriesPage />} />
          <Route path="/donor/donate" element={<DonorDonatePage />} />
          <Route path="/donor/volunteer" element={<DonorVolunteerPage />} />
          <Route path="/donor/account" element={<DonorAccount />} />
          <Route
            path="/admin/donor-accounts"
            element={<AdminDonorAccounts />}
          />
          <Route
            path="/admin/organization-accounts"
            element={<AdminOrganizationAccounts />}
          />
          <Route
            path="/admin/view-submissions"
            element={<AdminViewSubmissions />}
          />
        </Route>
        <Route element={<OrganizationPageLayout />}>
          <Route path="/organization/home" element={<OrganizationHomePage />} />
          <Route
            path="/organization/donations"
            element={<OrganizationDonationsPage />}
          />
          <Route
            path="/organization/delivery"
            element={<OrganizationDeliveryPage />}
          />
          <Route
            path="/organization/account"
            element={<OrganizationAccountPage />}
          />
          <Route
            path="/organization/donation-create"
            element={<OrganizationDonationCreationPage />}
          />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
