
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//  
const collectionName = "users";
const db = getFirestore();

export const save = (data: Object) =>
    addDoc(collection(db, collectionName), data);

export const update = (id: string, updatedFields: object) =>
    updateDoc(doc(db, collectionName, id), updatedFields);


export const fetchAll = () => getDocs(collection(db, collectionName));

export const deleteItem = (id: string) => deleteDoc(doc(db, collectionName, id));

export const getItem = (id: string) => getDoc(doc(db, collectionName, id));