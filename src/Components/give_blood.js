import React,{useState,useContext} from 'react';
import {FirebaseContext} from '../Context/firebase_context'



export default function GiveBlood() {
	const {firebase} = useContext(FirebaseContext)
	const [date,setDate] = useState(new Date().toString())
	const [age,setAge] = useState(0);
	

	function submitted(){
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
		  'size': 'normal',
		  'callback': function(response) {
		    // reCAPTCHA solved, allow signInWithPhoneNumber.
		    // onSignInSubmit();/
		    alert("captcha solved")
		  }
		});
		// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');


		// firebase.auth().signInWithPhoneNumber(number,)
	}


 	function today(){
 		let today= new Date();
 		let year = today.getFullYear().toString();
 		let month = (today.getMonth()+1).toString();
 		let date = today.getDate().toString();
 		
 		if(month.length===1){
 			month = "0"+month;
 		}
 		if(date.length===1){
 			date = "0"+date;
 		}

  		let today_date =  `${year}-${month}-${date}`
  		console.log(today_date);
  		return today_date;
 	}

 	today();
 	
  return (
  	<>
  	
  	<div>
  		login
  		<input placeholder="phonenumber"/>
  		
  		// todo if authenticated and code 
  	</div>
   <div>
   signup

    <form onSubmit={(e)=>{ e.preventDefault(); alert(e.target.bloodgroup.value)}}>
    	<input placeholder="full name"/>
    	<input type="date" value={today()} onChange={
  			(e)=>{
  				let slected_date = new Date(e.target.value);
  				setDate(slected_date.toString());
  				let current_date = new Date(); 
  				let passed_year = Math.abs(current_date.getUTCFullYear() - slected_date.getUTCFullYear());
  				// console.log(passed_year);
  				setAge(passed_year)
  				// todo set it as age of person
  				
  			}
  		}/>
  		<input placeholder="phone number" />
  		location
  		bloodgroup
  		<select name="bloodgroup" id="bloodgroup">
		    <option value ="A+">A+</option>
		    <option value ="A-">A-</option>
		    <option value ="B+">B+</option>
		    <option value ="B-">B-</option>
		    <option value ="O+">O+</option>
		    <option value ="O-">O-</option>
		    <option value ="AB+">AB+</option>
		    <option value="AB-">AB-</option>

		 </select>
		<input type="submit" value="save"/>

    </form>
   </div>
   {date}{age}
   <div className="recaptcha-container">
   </div>
   </>
  );
}


