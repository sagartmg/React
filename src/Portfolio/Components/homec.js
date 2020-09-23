import React,{Component}from 'react';
import ReactDOM from 'react-dom';

import background from '../Images/background.jpg';

import '../Css/home.css'




 

export default class Homec extends Component{
	constructor(){
		super();
		this.changeban = this.changeban.bind(this)
	}
	componentDidMount(){

 let banner_content= document.querySelector(".banner_content")
	console.log(banner_content);
	if(banner_content){
		let banner_content_height = banner_content.getBoundingClientRect().height;
	console.log(banner_content_height);
	}
	 window.addEventListener("scroll",function(){
            var yscrolled = window.pageYOffset;
            console.log("yscrolled",yscrolled); 
          

        })

	 let navheight =document.querySelector(".navbar");
	 alert(navheight.getBoundingClientRect().height);
	 let ddhei =navheight.getBoundingClientRect().height
	 let banner = document.querySelector(".banner");
	 banner.style.marginTop=`${ddhei}px`;

	}

	changeban(){
 let banner_content= document.querySelector(".banner_content")
 	banner_content.style.top ="0px";


}
	componentDidUpdate(){
		console.log("ca")
		
	}

	render(){
		return(
		<>
		
		
		<div className="banner" onClick={this.changeban}>
			<div className="banner_content">
				<p>Sagar Tamang</p>
				<p>Sagar Tamang</p>
				<p>Sagar Tamang</p>
				<p>Sagar Tamang</p>
				<p>Sagar Tamang</p>
				<p>Sagar Tamang</p>

			</div>


			

		</div>

		
	
		</>

		)


	}


	
	 
	
}



