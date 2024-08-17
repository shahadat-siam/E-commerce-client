import { createContext } from "react";
import { app } from "../Firebase/Firebase.config";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

 
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;