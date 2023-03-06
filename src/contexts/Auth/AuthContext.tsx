import { useState, createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, db } from "../../config/firebase";

import { Props, IUser, AuthContextType } from "./interface";
import { addDoc, collection } from "firebase/firestore";

const AuthContext = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext) as AuthContextType;
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [loginUser, setLoginUser] = useState<IUser | null>();

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log("Success!! result: ", result.user);
        const userInfo = {
          username: result.user.displayName,
          email: result.user.email,
          profilePic: result.user.photoURL,
          uid: result.user.uid,
        }

        setLoginUser(userInfo);
        console.log(loginUser);

        // todo: fetch first, then if not exists, add the logged-in-new user
        const collectionRef = collection(db, "users");
        const payload = {
          username: result.user.displayName,
          email: result.user.email,
          profilePic: result.user.photoURL,
          uid: result.user.uid,
        };
        const docRef = await addDoc(collectionRef, payload);
        console.log("Success!! \n\tThe new ID is: " + docRef.id);
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
