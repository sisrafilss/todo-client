import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  const auth = getAuth();

  // Sing In Using Google
  const loginWithGoogle = (navigate) => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        navigate("/");
        const user = result.user;
        setAuthError("");
        setUser(user);
        console.log(user);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      });
  };

  // Observing user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthError("");
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // LogOut
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setAuthError(error);
      });
  };

  return { user, authError, loading, loginWithGoogle, logOut, setLoading };
};

export default useFirebase;
