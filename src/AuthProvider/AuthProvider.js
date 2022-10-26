import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();


const auth = getAuth(app);

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);

    const GoogleProvider = new GoogleAuthProvider();

    const GitgubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);

    }

    const updateUserProfile = (profile) => {

        return updateProfile(auth.currentUser, profile);
    }

    const SingInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {


            setUser(currentUser);

        })

        return () => { unsubscribe(); }

    }, [])


    const logOut = () => {

        return signOut(auth);


    }


    const EmailVarification = () => {


        return sendEmailVerification(auth.currentUser);


    }

    const googleLogin = () => {

        return signInWithPopup(auth, GoogleProvider);


    }

    const GithubLogin = () => {

        return signInWithPopup(auth, GitgubProvider);
    }


    const info = { displayName: 'Sohel Rana' }

    const authInfo = { info, createUser, updateUserProfile, SingInUser, user, logOut, EmailVarification, googleLogin, GithubLogin }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;