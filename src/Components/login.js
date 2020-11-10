import React,{useState,useContext,useEffect} from 'react';
// import {FirebaseContext} from '../Context/firebase_context'

import {MapContainer} from './maps'
import '../Styles/login.css'
import {Link,Redirect,useHistory as History} from 'react-router-dom';

import {FirebaseContext} from '../Context/firebase_context'

export default function Login(props) {
	const {firebase} = useContext(FirebaseContext);
	const [error_message,setErrorMessage] = useState();
		// const{firebase_} = firebase;
	// console.log(firebase);
	// console.log(firebase)
	const [content,setContent] = useState([]);

	useEffect(() => {
    firebase
      .firestore()
      .collection("donors")
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);

      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
	

	function setUpRecaptcha(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };
  // setUpRecaptcha();

function onSignInSubmit(event) {
    
    event.preventDefault();
    setUpRecaptcha();
    var phoneNumber = "+9779840425514";
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
            console.log("Success");
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            var verificationId = window.prompt("Enter otp")
            confirmationResult
                .confirm(verificationId)
                .then(function (result) {
                    // User signed in successfully.
                    var user = result.user;
                    user.getIdToken().then(idToken => {
                        window.localStorage.setItem('idToken', idToken);

                       
                        console.log(idToken);
                    });
                })
                .catch(function (error) {
                    // User couldn't sign in (bad verification code?)
                    console.error("Error while checking the verification code", error);
                    window.alert(
                        "Error while checking the verification code:\n\n" +
                        error.code +
                        "\n\n" +
                        error.message
                    );
                });

        })
        .catch(function (error) {
            console.log("sign Up error:" + error.code);
        });

}

	function submitted(e){

		
	// 	// console.log("event",e.target);
	// 	// e.preventDefault();
	// 	// console.log(firebase.auth);
	// 	window.recaptchaVerifier = new firebase.auth().RecaptchaVerifier('recaptcha-container', {
	// 	  'size': 'normal',
	// 	  'callback': function(response) {
	// 	    // reCAPTCHA solved, allow signInWithPhoneNumber.
	// 	    // onSignInSubmit();/
	// 	    alert("captcha solved")
	// 	  }
	// 	});
	// 	// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');


	// 	// firebase.auth().signInWithPhoneNumber(number,)
	}
	function getUUID() {
			    // eslint gets funny about bitwise
			    /* eslint-disable */
			    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			        const piece = (Math.random() * 16) | 0;
			        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
			        return elem.toString(16);
			    });
			    /* eslint-enable */
			  }


	// submitted();
	function emialAuth(e){
		console.log(e.target.email);
		console.log(e.target.password);
		e.preventDefault();

		// firebase.auth().
		firebase.auth().signInWithEmailAndPassword(e.target.email.value,e.target.password.value)
		.then(user=>{
			// user.user.isEmailVerified()
				if(user.user.emailVerified){ // note difference on this line
	          // console.log("Email is verified");
	          // console.log("get email from user",user.user.email)
	          
	          let specific = content.filter(el=>el.email==user.user.email);
	          console.log("specific",specific);
	          // console.log("specific",specific[0].id);


	          // props.history.push("/edituser")


	          props.history.push({
					           pathname: '/edituser',
					           search: '?query=abc',
					           // state: { detail: specific[0].id }
					           state: { detail: user.user.email }

					       });

	        }
	          else{
	          	console.log("nmot verified")
	          	setErrorMessage("Email is not verified yet")

	          	// break;
	          }

		})
		.catch((error)=>{
			console.log("failed",error)
			setErrorMessage(error.message);
			// setValues(
			// 	{
			// 		email:"",
			// 		password:"",
			// 		error:error.message

			// 	})


		});
	}
	function emailVerify(e){
		e.preventDefault();
		// firebase.auth()
		// 		.createUserWithEmailAndPassword("minaapangi@gmail.com", "password")
		// 		.sendEmailVerification()
		// 		.then((result)=> result.user.updateProfile({
		// 			displayName:"minaapangi",
		// 			photoUrl:Math.floor(Math.random()*5)+1,

		// 		}))
		// 		.catch(error=>{
		// 			console.log("failed fro new email",error)
		// 		})
		// 	var actionCodeSettings = {
		//   url: 'https://www.example.com/?email=',
		//   handleCodeInApp: true,
		//   // When multiple custom dynamic link domains are defined, specify which
		//   // one to use.
		//   dynamicLinkDomain: "example.page.link"
		// };


		const promise = firebase.auth().createUserWithEmailAndPassword("giwalod564@appnox.com", "giwalod564@appnox.com");
		console.log(promise);
		console.log(typeof(promise))
		promise.then(user => {
			console.log("verifcation sent")
		   user.user.sendEmailVerification();
		}).catch(error => console.log(error));

		
		// firebase.auth().currentUser.sendEmailVerification(actionCodeSettings)
		//   .then(function() {
		//     // Verification email sent.
		//   })
		//   .catch(function(error) {
		//     // Error occurred. Inspect error.code.
		//   });


	}
		// alert("")
		useEffect(()=>{
		 let childs = document.querySelector(".form_container").children
		console.log("childs",childs)
		let childs_array = [...childs]
		childs_array[0].focus();
		childs_array.forEach(child=>{
			child.style.marginBottom="1em";
			child.style.outline="transparent";

		})
		})



  return (
    <>
    {
    	error_message && 
    <div className="error_container">
    	<div className="error_message">
    	{error_message}
    	<button className="err_btn" onClick={()=>{
    		setErrorMessage(undefined)
    	}}>
    	x
    	</button>
    	</div>
    </div>
}
   <div className="login_container">

   <form onSubmit={emialAuth} className="form_container">
   
   		<input type="email" placeholder="email" name="email"  className="getBig"/> 
   		<input type="password" placeholder="password" name="password"  className="getBig"/> 

   		<input type="submit" value="login" className="submit_btn"/>
   </form>
   </div>

   
   
    </>
  );
}


// import React, { Component } from 'react';
// // import './App.css';
// import firebaseConfig  from './firebaseConfig';
// import * as firebaseui from "firebaseui";
// import firebase from "firebase";

// class Verification extends Component {
//   componentDidMount() {
//     const fbase = firebase.initializeApp(firebaseConfig);
//     const uiConfig = {
//       signInSuccessUrl: "https://netflix-clone-ankur.herokuapp.com/", //This URL is used to return to that page when we got success response for phone authentication.
//       signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
//       tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
//     };
//     var ui = new firebaseui.auth.AuthUI(firebase.auth());
//     ui.start("#firebaseui-auth-container", uiConfig);
//   }
//   render() {
//     return (
//       <>
//       <h1>REACT PHONE AUTHENTICATION</h1>
//       <div id="firebaseui-auth-container"></div>
//       </>
//     )
//   }
// }

// export default Verification;