import React,{useState} from 'react';
import chroma from 'chroma-js'
import House from './Components/house'
import './Css/styles.css'
import Palette from './Components/palette'
import Custom from './Components/custom'

function App() {
  const[main_color, setMainColor] = useState("#FF0000");
  const[detail_color, setDetailColor] = useState("#008b7e");
  const[extra_color, setExtraColor] = useState("#bc0000");
 
  return (
    <React.Fragment>
      <div className="whole">
        <House colors={[main_color,detail_color,extra_color]}/>
         <Palette functions={[main_color,detail_color,extra_color,setMainColor,setDetailColor,setExtraColor]}/>
      </div>

     

    </React.Fragment>
  );
}

export default App;
