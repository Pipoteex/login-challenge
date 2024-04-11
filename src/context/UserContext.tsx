import {
    useState,
    createContext,
    useContext,
    useCallback,
    useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import { LoginTypes } from "../types/types";

type ContextState = {
    state: LoginTypes | undefined;
    setState: (newstate: LoginTypes | undefined) => void;
};

const initialState = {
    state: undefined,
    setState: () => {},
};

const UserContext = createContext<ContextState>(initialState);

export function UserProvider({ children }: { children: React.ReactNode }) {
    //STATES

    const [state, setUser] = useState<LoginTypes | undefined>(() => {
        const localUser = window.localStorage.getItem("user");
        if (localUser) return JSON.parse(localUser);
        return null;
    });
    const setState = useCallback((updatedUser: LoginTypes | undefined) => {
        setUser(updatedUser);
        window.localStorage.setItem("user", JSON.stringify(updatedUser));
    }, []);

    //HOOKS

    const navigate = useNavigate();

    //FUNCTIONS

    useEffect(() => {
        const localUser = window.localStorage.getItem("user");

        if (!localUser) {
            navigate("/login");
        }
    }, []);

    return (
        <UserContext.Provider value={{ state, setState }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser(): ContextState {
    const context = useContext(UserContext);
    if (!context)
        throw Error(
            "This hook can only be used under the UserProvider component"
        );
    return context;
}
