import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc,getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAOfJhS9AwSnrJEB6TmKFLn7rxAEfGnF58",
  authDomain: "crwn-clothing-db-151c8.firebaseapp.com",
  projectId: "crwn-clothing-db-151c8",
  storageBucket: "crwn-clothing-db-151c8.appspot.com",
  messagingSenderId: "792643777496",
  appId: "1:792643777496:web:423c41911b86b098dab8ad"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
     prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)

  
if(!userSnapshot.exists()){
    // if user data doesn't exist
  const {displayName, email} = userAuth;
  const createdAt = new Date();


    // create / set the document with the data from userAuth in my collection 
  try{
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    })
  } catch (error) {
    console.log('error creating the user', error.message)
  }
}


  //check if user data exists
  // return userDocRef

  return userDocRef;
}