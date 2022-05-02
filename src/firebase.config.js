import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDoXI7vROkhXuWEZ3My1k-iDBNjZEqbd7M",
    authDomain: "foodapp-1aa0b.firebaseapp.com",
    databaseURL: "https://foodapp-1aa0b-default-rtdb.firebaseio.com",
    projectId: "foodapp-1aa0b",
    storageBucket: "foodapp-1aa0b.appspot.com",
    messagingSenderId: "635730656423",
    appId: "1:635730656423:web:60964d77cd40aac3f7ef82"
  };

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};
