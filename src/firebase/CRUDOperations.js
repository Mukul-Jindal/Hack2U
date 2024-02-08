import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "./initiate";

export default function fetchClothes(Passesquery,user) {
    return new Promise((resolve, reject) => {
        const givenQuerry = query(
            collection(db, Passesquery['collection'], user.uid, Passesquery['cloth']),
            where('color', '==', Passesquery['color']),
            where('gender', '==', Passesquery['gender'])
            );
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

export function uploadFile(user, file, query) {
    /*
        {
            "gender" : "men",
            "cloth" : "hoodie",
            "color" : "black"
        }
    */
    const metadata = {
        contentType: 'image/jpeg'
    };
    return new Promise((resolve, reject) => {
        //Here we have to extract file name from 'file' parameter
        let fileName = file.name;
        const storageRef = ref(storage, `${user.uid}/${query['cloth']}/` + fileName);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata)
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(`Error:${error}`);
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => {
                        setDoc(doc(db, `Clothes/${user.uid}/${query['cloth']}/${url.slice(url.indexOf("token=")+6,url.length)}`), {
                            color: query['color'],
                            cloth : query['cloth'],
                            gender: query['gender'],
                            imageUrl: url
                        })
                            .then((success) => resolve(`Successfully added file to cloudStorage, message:${success}`))
                            .catch(err => reject(`error:${err}`))
                    })
                    .catch(err => reject(`error:${err}`))
            }
        );
    })
}