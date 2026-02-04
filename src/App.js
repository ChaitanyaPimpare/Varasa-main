import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import ContactPage from "./pages/ContactPage";
import DonateGrantsPage from "./pages/DonateGrantsPage";
import EventsPage from "./pages/EventsPage";

import ProgramsAdmin from "./admin/ProgramsAdmin";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import { AdminProvider } from "./context/AdminContext";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/research", element: <ResearchPage /> },
  { path: "/donations", element: <DonateGrantsPage /> },
  { path: "/contact", element: <ContactPage /> },

  { path: "/admin/programs", element: <ProgramsAdmin /> },
  { path: "/admin-login", element: <AdminLogin /> },
  { path: "/admin-dashboard", element: <AdminDashboard /> }
]);

function App() {
  return (
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  );
}

export default App;
