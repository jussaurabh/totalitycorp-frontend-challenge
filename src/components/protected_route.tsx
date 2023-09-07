import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProtectedRoute = ({ children }: any) => {
	const { user } = useAuth();

	if (!user) {
		// user is not authenticated
		return <Navigate to="/" />;
	}
	return <>{children}</>;
};

export default ProtectedRoute;
