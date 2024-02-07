import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./initiate";
export default function fetchClothes(Passesquery) {

    return new Promise((resolve, reject) => {
        const givenQuerry = query(
            collection(db, Passesquery['collection'], Passesquery['gender'], Passesquery['type']),
            where('color', '==', Passesquery['color']));
        getDocs(givenQuerry).then((snapshot) => {
            resolve({
                data: snapshot
            })
        }).catch((err) => {
            reject({
                data: err,
            })
        })
    })
}