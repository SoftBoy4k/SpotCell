import { db } from './firebase'
import { collection, setDoc, getDoc, doc } from "firebase/firestore";

const usersRef = collection(db, "users");


export const addToDB = async (id, name, lastName, phone, email) => {
    try {
        await setDoc(doc(usersRef, email), {
            id,
            name,
            lastName,
            phone,
            email
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getDataFromDB = async (userEmail) => {
    let currentUserData = undefined;

    const docRef = doc(db, "users", userEmail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) { 
        currentUserData = docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

    return currentUserData
}