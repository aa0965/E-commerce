import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5qRQCKpXpoEhUu5SXRuyFWKGoqPOLS0E",
    authDomain: "e-commerce-6f4c5.firebaseapp.com",
    projectId: "e-commerce-6f4c5",
    storageBucket: "e-commerce-6f4c5.appspot.com",
    messagingSenderId: "109078548859",
    appId: "1:109078548859:web:1158d259a9c142a21fedde"
  };

  export const createUserProfile = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
    // console.log(snapshot);
    if(!snapshot.exists){
       const {displayName,email} = userAuth;
       const createAt = new Date();
      
       try{
          await userRef.set({
            displayName,
            email,
            createAt,
            ...additionalData
          })
       }catch(err){
         console.log('error while creating user',err);
       }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;