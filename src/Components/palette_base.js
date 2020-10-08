import React from 'react'
import '../Css/palette_base.css'

export default function BasePalette(props){

		// const [setBaseColor,setMainColor,setDetailColor,setExtraColor] = props
	const[ setBaseColor,setMainColor,setDetailColor,setExtraColor,selector_option] = props.functions


		function changeBaseColor(to_color){
			console.log(to_color,selector_option)
		setBaseColor(to_color);
	// setDetailColor("#ffc2ae");
			// setBaseColor("#ffc2ae");
			// setExtraColor("#ffc2ae")
			// if(selector_option =="main"){
			// 	setMainColor(to_color)
			// }
			// else if(selector_option=="detail"){
			// 	setDetailColor(to_color)
			// }
			   
			switch(selector_option){
			      case "detail":
			      	setDetailColor(to_color)
			       	  console.log("selector_option detial")

			            break;
			      case "extra":
			      	setExtraColor(to_color)
			       	  console.log("selector_option extra")

			            break;
			       default: 
			       	  setMainColor(to_color)
			       	  console.log("selector_option default")
						}
			}
			// }
		// }

		function crateBasePalettes(){
		     return props.colors.map(color=>{
				return <div key={color.color} style={{backgroundColor:color.color}}
						 className="palatee_base"
						 onClick={()=>changeBaseColor(color.color)}
						 >
					<span id="base_color_name">{color.name}</span>

				</div>
			}
			);


		}

	return(
		<div className="palette_base_container">

			{crateBasePalettes()}
		
		
		</div>
		)
 
}

