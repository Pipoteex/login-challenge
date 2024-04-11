import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./features/Login/Login";
import Dashboard from "./features/Dashboard/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import BasicLayout from "./components/BasicLayout/BasicLayout";
import UndefinedPage from "./components/UndefinedPage/UndefinedPage";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <UserProvider>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <BasicLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Route>
                        <Route path="/login" element={<Login />} />

                        <Route path="*" element={<UndefinedPage />} />
                    </Routes>
                </UserProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
