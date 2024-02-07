import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./initiate";

export default function signIn(details) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, details.email, details.password)
            .then((userCredential) => {
                resolve(userCredential.user);
            })
            .catch((error) => {
                reject(error.message)
            })
    })
}

export function signUp(details) {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, details.email, details.password)
            .then((userCredential) => {
                resolve(userCredential.user);
            })
            .catch((err) => {
                reject(err);
            })
    })
}