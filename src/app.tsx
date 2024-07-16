import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";
import ErrorTrip from "./pages/error-trip";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
  {
    path: "/trips/nofound",
    element: <ErrorTrip />,
  },
]);
export function App() {
  return <RouterProvider router={router} />;
}
