import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import axios from "axios";

 
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

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
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

    // save user data
    const saveUser = async user => {
        const currentUser = {
            name: user?.displayName, 
            email : user?.email, 
            role: 'customer' ,  
        }
        // console.log(currentUser)
        if(currentUser?.name !== null || currentUser?.image_url !== null){
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/user`, currentUser)
            // console.log(data)
            return data
        } 
    }

    // On Auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser){
                saveUser(currentUser)
            }
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
        signIn,
        signUpWithFacebook,
        loginWithGoogle,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;