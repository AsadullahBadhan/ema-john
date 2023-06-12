import React, { useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import auth, { googleProvider } from "../firebase.config";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    function signUpwithEmail(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function loginWithEmail(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function googleSignIn() {
        return signInWithPopup(auth, googleProvider);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signUpwithEmail,
        loginWithEmail,
        googleSignIn,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
