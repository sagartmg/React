import Firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

import {seedDatabase} from './seed'

const config = {
	 apiKey: "AIzaSyD8kkIRcRCv8czqGkLUZNSKwGo02plRLoo",
    authDomain: "netflix-39f65.firebaseapp.com",
    databaseURL: "https://netflix-39f65.firebaseio.com",
    projectId: "netflix-39f65",
    storageBucket: "netflix-39f65.appspot.com",
    messagingSenderId: "18158253402",
    appId: "1:18158253402:web:53615440bb636da192ef63",
    measurementId: "G-319XP09T4L"
	
};

const firebase = Firebase.initializeApp(config);


// once in life time...uploading data to firestore. 
// seedDatabase(firebase);

export {firebase};
