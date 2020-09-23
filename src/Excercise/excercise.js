import React,{component}from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



export default function Excercise(){
	function conntect_backend(){
		const user = {
			username: "new_user"
		}
		axios.get('http://localhost:5000/users')
			.then(res=>console.log(res.data));

		

		{/* 

			axios.post('http://localhost:5000/users/add',user)
			.then(res=>console.log(res.data));

		 */}
	}
	return(

		<>
			<div>
				Excercise
			</div>
			<button onClick={conntect_backend}>
			connect to backend
			</button>

		</>

		)

}



