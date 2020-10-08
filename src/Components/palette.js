import React,{useState} from 'react';

import seedColors from '../seedColors'

import '../Css/palette.css'
import PaletteRange from './palette_range'
import BasePalette from './palette_base'
import ReceiveProps from './ReceiveProps'


function Palette(props) {

  const [main_color,detail_color,extra_color, setMainColor, setDetailColor,setExtraColor] = props.functions
  const[base_color, setBaseColor] = useState("#FF0000");
  const[radio, setRadio] = useState("0");
  const[radio_name, setRadioName] = useState("material-ui-colors");
  

  // const[main_color, setMainColor] = useState("#FF0000");
  // const[detail_color, setDetailColor] = useState("#FF0000");
  // const[extra_color, setExtraColor] = useState("#FF0000");


  const[selector_option, setSelector] = useState("main");
  // use of custom hook ...but only changing the value only...so no-need. 


  function changeRadio(e){
    setRadio(e.target.value)
    setRadioName(e.target.id)
  }

  function eachRadio(){
    return seedColors.map((seed,index)=>{

      return <div className="each_radio" key={seed.id}>

                     {seed.id=="material-ui-colors"?
                     <input type="radio" id={seed.id} name="seedColors" value={index}
                     onChange={changeRadio}/>:
                      <input type="radio" id={seed.id} name="seedColors" value={index}
                     onChange={changeRadio}/> 
                     }
                      <label htmlFor={seed.id}>{index}</label>
              </div>
    })


  }
  function selectorToBeChanged(selector){
    // create new useState for item to be selctor to be slected. 
    switch(selector){
      
      case "detail":
            setSelector("detail")
            break;
      case "extra":
            setSelector("extra")
            break;
      default:
          setSelector("main")
    }



  }
  function selection(){
    let selectors = [{
      selector:"main",
      color:main_color
      },
      {
      selector:"detail",
      color:detail_color
      },
      {
      selector:"extra",
      color:extra_color
      },
      ];
    return selectors.map(selection=>{
      return <div key={selection.selector} className="each_selector_container">
                 <div style={{backgroundColor:selection.color,
                  height:"50px",
                  width:"50px",
                  border:selection.selector == selector_option && "5px solid cyan"}} onClick={()=>selectorToBeChanged(selection.selector)}>
                 </div>
                 <p>{selection.selector}</p>  
            </div>
    })

  }
  console.log("seedColors",seedColors)


  function changeDropDown(e){
    setRadio(e.target.value)
    }

  function mapDropDown(){
    return seedColors.map((seed,index)=>{
      return <option key={index} value={index}>{seed.paletteName}</option>
    });
  }





  return (
    <div className="whole_palette">
      <div className="palette_container">
      <div className="color_selector">
         {selection()}




      </div>

         <div className="color_palettes">
          {/* 
           <form className="radio_form">
               {eachRadio()}
          </form>

          {radio_name}
           */}

          <select id="colors" name="carlist" onChange={changeDropDown}>
           {mapDropDown()}
          </select>

          <BasePalette {...seedColors[radio]} functions ={[setBaseColor,setMainColor,setDetailColor,setExtraColor,selector_option]}/>
                                                        {/* the order of functions should match while destructuring.   */}

          <PaletteRange functions ={[base_color,setBaseColor,setMainColor,setDetailColor,setExtraColor,selector_option]}/>

        </div >

     </div>
    </div>
  );
}

export default Palette;
