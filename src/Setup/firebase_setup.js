	import Firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

	const config = {
	 apiKey: "AIzaSyA3WINPRiRQZe2UseIYzpYeftGLi5J54H4",
    authDomain: "blood-215d3.firebaseapp.com",
    databaseURL: "https://blood-215d3.firebaseio.com",
    projectId: "blood-215d3",
    storageBucket: "blood-215d3.appspot.com",
    messagingSenderId: "641957685258",
    appId: "1:641957685258:web:3216d8fdb8ef0992ea57f3",
    measurementId: "G-CYG11JBVFT"

};

var firebaseConfig = {
    apiKey: "AIzaSyA3WINPRiRQZe2UseIYzpYeftGLi5J54H4",
    authDomain: "blood-215d3.firebaseapp.com",
    databaseURL: "https://blood-215d3.firebaseio.com",
    projectId: "blood-215d3",
    storageBucket: "blood-215d3.appspot.com",
    messagingSenderId: "641957685258",
    appId: "1:641957685258:web:3216d8fdb8ef0992ea57f3",
    measurementId: "G-CYG11JBVFT"
  };


const firebase = Firebase.initializeApp(firebaseConfig);



export {firebase};
