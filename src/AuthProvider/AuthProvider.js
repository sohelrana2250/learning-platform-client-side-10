import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();


const auth = getAuth(app);

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);


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


    const info = { displayName: 'Sohel Rana' }

    const authInfo = { info, createUser, updateUserProfile, SingInUser, user, logOut, EmailVarification }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;