// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    FacebookAuthProvider,  
    updateProfile,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    onIdTokenChanged
} from "firebase/auth";

// internal imports
import userProfile from '../../assets/logos/user-profile.jpg';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();

// create new user
export const createNewUser=(name, email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const userInfo = userCredential.user;
        const signedInUser = {
            success:true,
            isLoggedIn:true,
            user:{
                uid: userInfo.uid,
                name:name,
                email: email,
                photoURL:userProfile,
            }
        }
        updateUser(name, userProfile);
        verifyEmail();
        return signedInUser;
    })
    .catch((error) => {
        // Handle Errors here.
        const loginError ={
            success:false,
            errorMessage : error.message,
            isLoggedIn:false
        }
        storeAuthToken();
        return loginError;
    }); 
}

// user sign-in with password
export const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const userInfo = userCredential.user;
        const signedInUser = {
            success:true,
            isLoggedIn:true,
            user:{
                uid: userInfo.uid,
                name:userInfo.displayName,
                email: userInfo.email,
                photoURL:userInfo.photoURL,
            }
        };
        storeAuthToken();
        return signedInUser;
    })
    .catch((error) => {
        // Handle Errors here.
        const loginError ={
            success:false,
            errorMessage : error.message,
            isLoggedIn: false
        }
        return loginError;
    });
}

// google login
export const googleLogin = ()=>{
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
    .then((result) => {
        // The signed-in user info.
        const userInfo = result.user;

        const signedInUser = {
            success:true,
            isLoggedIn:true,
            user:{
                uid: userInfo.uid,
                name:userInfo.displayName,
                email: userInfo.email,
                photoURL:userInfo.photoURL,

            }
        }
        storeAuthToken();
        return signedInUser
    }).catch((error) => {
        // Handle Errors here.
        const loginError ={
            success:false,
            errorMessage : error.message,
            isLoggedIn: false
        }
                console.log(error)
        return loginError;
    });
}

// Fb login
export const fbLogin = ()=>{
    const fbProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, fbProvider)
    .then((result) => {
        // The signed-in user info.
        const userInfo = result.user;
        const signedInUser = {
            success:true,
            isLoggedIn:true,
            user:{
                uid: userInfo.uid,
                name:userInfo.displayName,
                email: userInfo.email,
                photoURL:userInfo.photoURL,
            }
        }
        storeAuthToken();
        return signedInUser;
    })
    .catch((error) => {
        // Handle Errors here.
        const loginError ={
            success:false,
            errorMessage : error.message,
            isLoggedIn: false
        }
        console.log(error)
        return loginError;
    });
}

// sign-out user
export const signoutUser = ()=>{
    return signOut(auth).then(() => {
    // Sign-out successful.
    const logOutUser = {success:true, isLoggedIn: false}
    return logOutUser;
    }).catch((error) => {
    // An error happened.
    return error
    });
}

// update user
function updateUser(userName, image){
    updateProfile(auth.currentUser, {
    displayName: userName, photoURL: image
    }).then(() => {
        console.log('User Updated successfully');
    }).catch((error) => {
        console.log('User Update failed',error);
    });
}

// vafiry email
const verifyEmail = ()=>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
        // Email verification sent!
        // ...
        return 'We have sent you an email.'
    });
}

// set password
export const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth, email)
    .then(() => {
        return 'We have sent you an email to reset you password';
    })
    .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
    });
}

// token
const storeAuthToken = ()=>{
    auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    // Send token to your backend via HTTPS
    console.log(idToken)
    sessionStorage.setItem('authToken',idToken)
    }).catch(function(error) {
        return error
    });
}

// //  Auto-update token when refreshed
// const idTokenChanged = ()=>{
//     onIdTokenChanged(auth, async (user) => {
//     if (user) {
//         const token = await user.getIdToken();
//         sessionStorage.setItem('authToken', token);
//     } else {
//         sessionStorage.removeItem('authToken');
//     }
//     });
// }