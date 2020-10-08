import React,{useState} from 'react'

 function Chooker({baka=true,initial=false}){
 	// console.log("baka",baka)   ///bak ={intial:true}
 	// console.log("initial",initial)   ///bak ={intial:true}

 	const [  value, setValue ] = useState(baka);


 	function chage(){
 		setValue(!value)

 	}
 	return [value,chage]




	
} 

export {Chooker}