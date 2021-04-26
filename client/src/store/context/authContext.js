import React, { useReducer } from "react";
import { authReducer, initAuthState } from "../reducer/authReducer";

const AuthStateContext = React.createContext();
const Provider = AuthStateContext.Provider;

export function GetAuthStateContext() {
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("AuthStateContext not found");
    }
    return context;
}

// Provider
export const AuthStateProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initAuthState);

    return <Provider value={{ authState, dispatch }}>{children}</Provider>;
};
