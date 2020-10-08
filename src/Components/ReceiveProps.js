import React from 'react'

export default function ReceiveProps(props){
	function ok(){
		props.setMainColor("#ffc2ae");
		props.setDetailColor("#ffc2ae");
		props.setBaseColor("#ffc2ae");

	}
	return <div>
	<h1 onClick={ok}>recieve props</h1>


			</div>
}