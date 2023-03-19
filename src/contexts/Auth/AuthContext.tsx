import { useState, createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, db } from "../../config/firebase";

import { Props, IUser, AuthContextType } from "./interface";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

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
        };

        const userRef = collection(db, "users");
        const q = query(userRef, where("email", "==", userInfo.email));

        const querySnapshot = await getDocs(q);

        let userExists = false;

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

          setLoginUser({
            username: doc.data().username,
            email: doc.data().email,
            profilePic: doc.data().profilePic,
            uid: doc.data().uid,
            docId: doc.id,
          });
          userExists = true;
        });

        if (!userExists) {
          createNewUser(userInfo);
        }
      })
      .catch((error) => console.log("Error!! error: ", error));
  };

  async function createNewUser(userInfo: IUser) {
    const collectionRef = collection(db, "users");
    const docRef = await addDoc(collectionRef, userInfo);
    console.log("Success in creating a new user!! \n\tThe new ID is: " + docRef.id);
  }

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
