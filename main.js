import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB_daq1R2YGsyJ5i0xt_FWEsmy0HLTXgGA",
    authDomain: "testingfirebase-28046.firebaseapp.com",
    projectId: "testingfirebase-28046",
    storageBucket: "testingfirebase-28046.appspot.com",
    messagingSenderId: "93363595912",
    appId: "1:93363595912:web:2b139d9480da8b0bea4d3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// const docRef = doc(db, 'Clothes', 'men');
// const docsnap = await getDoc(docRef);
// if (docsnap.exists()) {
//     console.log("Document data:", docsnap.data());
// } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
// }

let gender = 'men';
let cloth = 'hoodie';
let color = 'white';

const givenQuery = query(collection(db,'Clothes',gender,cloth),where('color','==',color));
const docsnap = await getDocs(givenQuery);
console.log(docsnap.size);
docsnap.forEach((element)=>{
    console.log(element.data());
})