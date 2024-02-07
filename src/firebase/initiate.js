import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB_daq1R2YGsyJ5i0xt_FWEsmy0HLTXgGA",
    authDomain: "testingfirebase-28046.firebaseapp.com",
    projectId: "testingfirebase-28046",
    storageBucket: "testingfirebase-28046.appspot.com",
    messagingSenderId: "93363595912",
    appId: "1:93363595912:web:2b139d9480da8b0bea4d3d",
};
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);