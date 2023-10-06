import React, { useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const signUp = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const auth = getAuth();

    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
