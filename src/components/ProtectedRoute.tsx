import { Navigate } from "react-router-dom";

import { useUser } from "../context/UserContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { state } = useUser();

    if (!state) {
        return <Navigate to={"/login"} />;
    }

    return children;
};
