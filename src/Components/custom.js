import React,{useState} from 'react'
import {Chooker} from './Chooker'

export default function Custom(){
	const [happy ,setHappy] = Chooker({baka:true});
	// console.log("chooker",Chooker();
	// console.log("happy",happy);
	// console.log("setHappy",setHappy)

	return <div>

	{happy? "happy": "sad"}
	<button onClick={()=>setHappy(!happy)}>
	happy
	</button>
	<form>
		<input type="text" placholder="u_name"/>
	</form>
	</div>
} 