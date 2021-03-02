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

  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };
  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };  

  firebase.initializeApp(config);
  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  };



  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
  
  export default firebase;