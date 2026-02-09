import { createBrowserRouter } from "react-router";
import LoginScreen from "../feature/auth/LoginScreen";
import RegistrationScreen from "../feature/auth/RegistrationScreen";
import { RouterProvider } from "react-router/dom";
import Dashboard from "../feature/dashboard/Dashboard";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "../context/AuthContext";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <LoginScreen />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <RegistrationScreen />
      </PublicRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

const RootRoute = () => {
  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  );
};

export default RootRoute;
