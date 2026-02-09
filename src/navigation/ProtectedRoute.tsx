import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const context = useContext(AuthContext);
  const user = context?.user;

  return user ? children : <Navigate to={"/"} replace />;
};

export default ProtectedRoute;
