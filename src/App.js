
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import ContactPage from "./pages/ContactPage";
import DonateGrantsPage from "./pages/DonateGrantsPage";



const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/Research", element: <ResearchPage /> },
  { path: "/donations", element: <DonateGrantsPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
