import React, { createContext } from 'react';




export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    const info = { display: 'Sohel Rana' }

    const authInfo = { info }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;