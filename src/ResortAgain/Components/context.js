



import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import data from '../data'



const RoomContext = React.createContext();
class MenuProvider extends Component{

	state = {
		dataa:[],
		filtered:[]



	}
	componentDidMount(){
		let dataa = this.reshapeData(data);
		this.setState({dataa})
		console.log("rooomdatat",dataa);
		console.log("room",this.state.dataa);
		let filtered = dataa.filter(element=>element.featured==true)
		this.setState({filtered})

	}

	reshapeData(dataa){
		let room = dataa.map(element=>{
		let id = element.sys.id;
		let image= element.fields.images.map(element=>element.fields.file.url)
		let rooms ={id,image,...element.fields}
		return rooms;
		})
		return room;
		
	}


	render(){
		return(
			<RoomContext.Provider value={{...this.state}}>
				{this.props.children}
			</RoomContext.Provider>
			)

	}
}

export {RoomContext,MenuProvider}