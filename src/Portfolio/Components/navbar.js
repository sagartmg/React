import React,{component,useEffect}from 'react';
import ReactDOM from 'react-dom';
import '../Css/navbar.css'
import { MdArrowUpward } from 'react-icons/md';






export default function Navbar(){

        

		    window.addEventListener('DOMContentLoaded', (event) => {

         let  bannerheight = document.querySelector(".ham_container").getBoundingClientRect().height;
		      // alert(bannerheight)
        console.log('DOM fully loaded and parsed');
		     let to_top = document.querySelector(".to_top_none");

            window.addEventListener('scroll',()=>{

            	let proj = document.querySelector(".form_container") 
		    	let projHe = proj.offsetTop;
		    	let current = proj.getBoundingClientRect().top

		    	// console.log("very_top",projHe,"current_top",current);




               var y_scrolled = window.pageYOffset;
               // console.log(y_scrolled)
		  	  let current_window_height = window.innerHeight;
               let form_top = document.querySelector(".form_container").offsetTop;
               let form_total = form_top-current_window_height;
               // console.log(y_scrolled,current_window_height,form_top,form_total);

               if(y_scrolled>form_total){
               	to_top.style.color="grey";
               	to_top.style.borderColor="grey";


               }
                if(y_scrolled<form_total){
               	to_top.style.color="black";
               	to_top.style.borderColor="black";




               }

		  	 

               // console.log(window);
               // console.log(y_scrolled);
               let contacts = document.querySelector(".resume_container_main") 
               let navheight = document.querySelector(".navbar").getBoundingClientRect().height;
		    	let contacts_height = contacts.offsetTop;
               if(y_scrolled > contacts_height-navheight){
                  to_top.classList.add("to_the_top_activate");
		    		document.querySelector(".navbar").style.display="none";

              
              

               }
               if(y_scrolled < contacts_height){
                  to_top.classList.remove("to_the_top_activate");
		    		document.querySelector(".navbar").style.display="flex";



               }

               


            })

            function ok(){
               window.scrollTo({
               	top:0,
               })
            }
            to_top.addEventListener('click',ok);

             let nav_slider = document.querySelector(".navbar_slider")
            nav_slider.addEventListener("mouseleave",()=>{
              // alert("focused");
      var ham = document.querySelector("#ham");

              nav_slider.classList.remove("show_slider");
      ham.classList.remove("active");

      document.querySelector(".navbar_slider_contents_container").classList.remove("show_slider_contents")

              // alert("f")
              console.log("out")

            })
   

		});

    function toggle(){
      // alert('clicked')
      var ham = document.querySelector("#ham");
      ham.classList.toggle("active");
      document.querySelector(".navbar_slider").classList.toggle("show_slider")
      document.querySelector(".navbar_slider_contents_container").classList.toggle("show_slider_contents")


    }
    function to_contact(){
      toggle();
    	let contacts_top = document.querySelector(".form_container").offsetTop;
    	let navbar_height =document.querySelector(".navbar").getBoundingClientRect().height
    	let to_co = contacts_top-navbar_height;// cause in teh middel, teh navbar gets out...
    	window.scrollTo({top:to_co});  


    }
     function slider_to_contact(){
      toggle();
      let contacts_top = document.querySelector(".form_container").offsetTop;
      let navbar_height =document.querySelector(".navbar").getBoundingClientRect().height
      let to_co = contacts_top-navbar_height;// cause in teh middel, teh navbar gets out...
      window.scrollTo({top:contacts_top});  


    }
     function to_project(){
      toggle();

     	
      	let contacts_top = document.querySelector(".projects_").offsetTop;
      	let navbar_height =document.querySelector(".navbar").getBoundingClientRect().height
      	let to_co = contacts_top-navbar_height;// cause in teh middel, teh navbar gets out...
        let active_navbar=document.querySelector(".navbar")
      
          window.scrollTo({top:to_co}); 

        	
      }
       function slider_to_project(){
      toggle();

      
        let contacts_top = document.querySelector(".projects_").offsetTop;
        let navbar_height =document.querySelector(".navbar").getBoundingClientRect().height
        let to_co = contacts_top-navbar_height;// cause in teh middel, teh navbar gets out...
        let active_navbar=document.querySelector(".navbar")
        window.scrollTo({top:contacts_top})

          
          
      }
      
      


    
     function to_resume(){
      toggle();
    	let contacts = document.querySelector(".resume_container_main") 
    	let contacts_height = contacts.offsetTop;
    	// alert(contacts)
    	console.log(contacts)

    	window.scrollTo({
    		top:contacts_height,
    	})


    }

   

	return(
		<>
     
		
		
		<div className="navbar">
          <div className="navbar_slider">
            <div className="navbar_slider_contents_container1">
            </div>

             <div className="navbar_slider_contents_container">
                <p className="slider_contents">Home</p>
                <p className="slider_contents" onClick={to_resume}>Resume </p>

                <p  className="slider_contents" onClick={slider_to_project}>Works</p>

                <p  className="slider_contents" onClick={slider_to_contact}>Contacts</p>
             </div>
              



          </div>
           <div className="ham_container">  
               <svg  
                  id="ham"  
                  className="ham ham6"  
                  viewBox="0 0 100 100"  
                  width="80"  
                  onClick={toggle}  
                >  
                  <path  
                    className="line top"  
                    d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"  
                  />  
                  <path  
                    className="line middle"  
                    d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"  
                  />  
                  <path  
                    className="line bottom"  
                    d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"  
                  />  
                </svg>  
             </div>
         
         <div className="navbar_contents">
            <p id="home">Home</p>
            <p onClick={to_resume}>Resume</p>
            
            <p onClick={to_project}>Works</p>
            <p  onClick={to_contact}>Contacts</p>
         </div>
			

		</div>


		
	

		
	
		</>

		)

}



