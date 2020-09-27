import React,{useEffect,useContext}from 'react';
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com'
import { FiMail } from 'react-icons/fi';



import '../Css/contact.css'




export default function Contact(){
	useEffect(()=>{
		console.log("all laoded. ")
		{/* 
		var labels = document.querySelector(".form_labels");
		var widd = labels.getBoundingClientRect().width;
		// alert(widd)
		console.log(widd)

		var submit_btn = document.querySelector("#this");
		submit_btn.style.marginLeft=`${widd}px`;
 */}
	});
{/* why useEFFect cant we use cdocument conent loaded insted
  document.addEventListener("DOMContentLoaded", loaded, false);

 */}
 function sendEmail(e) {
    e.preventDefault();
   console.log(e.target.Email.value);
   const email = e.target.Email.value;
   const message = e.target.message.value;
   console.log("ddsf",email,message);
   console.log(typeof(email))
   if(message.length<1){
   	return alert("message can't be empty");
   }
   if(email.length<1){
   	return alert("email is empty")
   }
   // if(!email.includes("@")){
   // 	return alert(" email must contain @ ")
   // }


    emailjs.sendForm('gmail', 'template_762ely2', e.target, 'user_HwsqwcfRjuiftcTpE6gAU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     e.target.reset();
  }



				return(
		<>
		
	
 	<div className="form_container">
 		<div className="inner_form_container">
	 	<FiMail style={{fontSize:"2.4rem",marginBottom:"0.3em"}}/>
	 	<div className="form_container_innner">
	 		<form className="contact-form" onSubmit={sendEmail}>
	 			<div className="form_contents_row">
		 			 <label className="form_labels">Name</label>
			      	 <input className="form_contents" type="text" name="name" />
			      

	 			</div>

	 			<div className="form_contents_row">
	 			    <label className="form_labels">email<span>*</span></label>
				    <input className="form_contents" type="email" name="Email" />
		      

	 			</div>

	 			<div className="form_contents_row">
	 			    <label className="form_labels">message<span>*</span></label>
		            <textarea id="message_area" className="form_contents" name="message" />
		      

	 			</div>

	 			<div className="form_contents_row submit_row">
	 			    <label className="form_labels" style={{visibility:"hidden"}}>send</label>
	 			    <div  className="form_contents" style={{backgroundColor:"transparent"}}>
		            <input id="this" type="submit" value="Send" />


	 			    </div>
		      	

	 			</div>
		      



		    </form>
		    <div className="extra_contacts">
		    <p>
		    kathmandu Nepal

		    </p>
		    <p>
		    +977-12334324

		    </p>

		    </div>

	 	</div>
	 	</div>
    
    </div>
		
	
	
		</>

		)

}



