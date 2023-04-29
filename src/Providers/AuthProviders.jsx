import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

 export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
const [user, setUser] = useState(null)  
const [loading, setLoading] = useState(true);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const googleSignIn = () =>{
setLoading(true)
return signInWithPopup(auth,googleProvider)
}
const githubSignIn = () =>{
setLoading(true)
return signInWithPopup(auth,githubProvider)
}
const createUser = (email,password)=>{
setLoading(true)
return createUserWithEmailAndPassword(auth,email,password);
}
// login system 
const signInUser = (email,password) =>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}

// handleLogout
const logOut = () =>{
setLoading(true)
return signOut(auth)
}

// updateProfileName and photo url
const updateProfileAndPhoto = (user,name,photo) =>{
setLoading(true)
return updateProfile(user,{
displayName:name,photoURL:photo
})
}
// send a user a verification email
const emailVerification = (user) =>{
setLoading(true)
return sendEmailVerification(user)
}
// Reset user password
const resetPassword = (email) =>{
return sendPasswordResetEmail(auth,email)
}


useEffect(()=>{
 const unsubscribe =   onAuthStateChanged(auth,(currentUser)=>{
 setUser(currentUser)
setLoading(false)
})
return ()=>{
 return unsubscribe()
};
// Ekhaneo signOut kora jai korle

},[])


const authInfo = {
user,
loading,
googleSignIn,
githubSignIn,
logOut,
createUser,
signInUser,
updateProfileAndPhoto,
emailVerification,
resetPassword,
}

return (
   <AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
  );
};

export default AuthProviders;