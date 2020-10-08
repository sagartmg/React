import React from 'react'
import chroma from 'chroma-js'
import seedColors from '../seedColors'
import '../Css/palette_range.css'


export default function PaletteRange(props){

  const[base_color,setBaseColor,setMainColor,setDetailColor,setExtraColor,selector_option] = props.functions;

  // <PaletteRange functions ={[base_color,setBaseColor,setMainColor,setDetailColor,setExtraColor,selector_option]}/>
function changeSelectorColor(to_color){
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


		 function getRange(hexColor) {
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
        end
      ];
    }
    let colorsArray = []

  function getScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(base_color))
    .mode("lab")
        .colors(numberOfColors);
    }

    let scale = getScale("#FF0000", 20).reverse();
    for (let i in scale) {
      colorsArray.push({
      
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgba", "rgba")
          .replace(")", ",1.0)")
      });
    }

    // console.log(scale)
    // console.log(colorsArray)

    // console.log(seedColors);
    function laycolors(){

      return scale.map(sca =>{
        return <div  key={sca} 
        style={{height:"60px",backgroundColor:sca}}
        className="palette_range"
        onClick={()=>changeSelectorColor(sca)} >
        <span id="scale">{sca}</span>



        </div>
      })
    }

	return(
		<>
		<p style={{textAlign:"center", margin:"2em 0 0.5em 0 ", fontSize:"1.5rem"}}>color-range</p>

		<div className="palette_range_container">
		{laycolors()}
		</div>
		</>)
}