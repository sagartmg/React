import React,{useState} from 'react';
// import { Datepicker } from "datepickerdate";



export default function GiveBlood() {
	const [date,setDate] = useState(new Date().toString())
	const [age,setAge] = useState(0);
	// function handleCtrlChange(name, value) {
 //    console.log(name, value);
 	function today(){
 		let today= new Date();
 		let year = today.getFullYear().toString();
 		let month = today.getMonth().toString();
 		let date = today.getDate().toString();
 		// console.log(date);
 		// console.log(month,typeof(month));
 		if(month.length===1){
 			// alert("")
 			month = "0"+month;
 		}
 		if(date.length===1){
 			date = "0"+date;
 		}

  		let today_date =  `${year}-${month}-${date}`
  		return today_date;
 	}
 	today();
 	
 //  }
  // new Date().toISOString()
  return (
  	<>
  	{/* 
  	<Datepicker
        name="yourFormControlName"
        value="2019-08-28"
        placeholder="Your custom placeholder"
        onDateChanged={this.handleCtrlChange}
      />
       */}
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
		    <option value ="A+">A RhD positive (A+)</option>
		    <option value ="A-">A RhD negative (A-)</option>
		    <option value ="B+">B RhD positive (B+)</option>
		    <option value ="B-">B RhD negative (B-)</option>
		    <option value ="O+">O RhD positive (O+)</option>
		    <option value ="O-">O RhD negative (O-)</option>
		    <option value ="AB+">AB RhD positive (AB+)</option>
		    <option value="AB-">AB RhD negative (AB-)</option>

		 </select>
		<input type="submit" value="save"/>

    </form>
   </div>
   {date}{age}
   </>
  );
}


