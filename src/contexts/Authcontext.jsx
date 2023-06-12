import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const Authcontext = React.createContext();
export function useAuth() {
    return useContext(Authcontext);
}

export function AuthProvider({ children }) {
    
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

//   signup function
    async function signup(email,password,username){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        // update profile
        await updateProfile(auth.currentUser, {
            displayName :username
        })

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })

    }
    // login func
     function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout 
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout
    };

    return (
        <Authcontext.Provider value={value}>
            {!loading && children}
        </Authcontext.Provider>
    )
}