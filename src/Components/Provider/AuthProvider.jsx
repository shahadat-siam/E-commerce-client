import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth,  GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";

 
export const AuthContext = createContext(null)
const auth = getAuth(app)
const facebookProvider = new FacebookAuthProvider()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log("current user ==>>",user)
    const [loading, setLoading] = useState(null);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUpWithFacebook = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider);
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // On Auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signUpWithFacebook,
        loginWithGoogle,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;