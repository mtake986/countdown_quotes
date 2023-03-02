import { useState, createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

import { Props, IUser, AuthContextType } from "./interface";

const AuthContext = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext) as AuthContextType;
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [loginUser, setLoginUser] = useState<IUser | null>();

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Success!! result: ", result.user);
        const username = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        const uid = result.user.uid;

        setLoginUser({ username, email, profilePic, uid });
        console.log(loginUser);
      })
      .catch((error) => console.log("Error!! error: ", error));
  };

  const handleLogout = async () => {
    try {
      signOut(auth);
      setLoginUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleGoogleLogin, loginUser, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
