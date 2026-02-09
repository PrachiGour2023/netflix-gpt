import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import type { ReactNode } from "react";
import { Navigate } from "react-router";

type Props = {
  children: ReactNode;
};

const PublicRoute = ({ children }: Props) => {
  const context = useContext(AuthContext);
  const user = context?.user;
  return !user ? children : <Navigate to={"/dashboard"} replace />;
};

export default PublicRoute;
