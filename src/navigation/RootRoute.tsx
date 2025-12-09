import { createBrowserRouter } from "react-router";
import LoginScreen from "../feature/auth/LoginScreen";
import RegistrationScreen from "../feature/auth/RegistrationScreen";
import { RouterProvider } from "react-router/dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/signup",
    element: <RegistrationScreen />,
  },
]);

const RootRoute = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default RootRoute;
