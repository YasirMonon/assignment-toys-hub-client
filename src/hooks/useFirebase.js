import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import toastCreator from "../components/toastifyCreator";

initializeAuthentication();

const useFirebase = () => {
  //All state
  // const location = useLocation();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  //Sign in provider
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  //Google sign in
  const signInUsingGoogle = (redirectPath) => {
    return signInWithPopup(auth, googleProvider);
  };

  //Facebook sign in
  const signInUsingFacebook = (redirectPath) => {
    return signInWithPopup(auth, facebookProvider);
  };

  //handle display name
  const displayname = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error.message)
      })
  }



  // //Update user
  // const updateUser = (name) => {
  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //   }).catch((error) => {
  //     setError(error.message);
  //   });
  // };


  //Register user

  const registerUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user)
        displayname(name)
        const newUser = { email, displayname: name }
        setUser(newUser);
        //save user to database
        saveUser(email, name);
        window.location.reload(true);

      })
      .catch((error) => {
        setError(error.message);
        if (error.message.includes("email-already-in-use")) {
          toastCreator("Email already exists!", "error");
        } else {
          toastCreator("Something went wrong!", "error");
        }
      });

  }






  // const registerUser = (name, email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(() => {
  //       updateUser(name);
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       if (error.message.includes("email-already-in-use")) {
  //         toastCreator("Email already exists!", "error");
  //       } else {
  //         toastCreator("Something went wrong!", "error");
  //       }
  //     });
  // };


  //Login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Logout functionality
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
        toastCreator("Something went wrong!", "error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);


  useEffect(() => {
    fetch(`https://toys-hub.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])

  // Save User

  const saveUser = (email, displayname) => {
    const user = { email, displayname };
    fetch('https://toys-hub.herokuapp.com/users',
      {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
  }


  return {
    user,
    admin,
    setUser,
    saveUser,
    error,
    loading,
    signInUsingGoogle,
    signInUsingFacebook,
    registerUser,
    loginUser,
    logout,
  };
};

export default useFirebase;
