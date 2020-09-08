import React from 'react';
import ReactDOM from 'react-dom';
import items from './data'

 const RoomContext = React.createContext();
 class RoomProvider extends React.Component{

 	 state={
 	 	filteredRoom:[],
 	 	room:[],
 	 	sortedRooms:[],
 	 	laoding:true

 	 }

componentDidMount(){
	let room = this.formatData(items);
	// console.log("rooms",rooms);
	let filteredRoom =room.filter(element=>element.featured===true);
	console.log("filteredRoom",filteredRoom);
		this.setState({room,filteredRoom,sortedRooms:room})
	

}
formatData(items){
	let  data = items.map(element=>{
		let id = element.sys.id;
		let image = element.fields.images.map(img=>img.fields.file.url);
		let room = {...element.sys,image,...element.fields}
		return room;
	})
	return data; 

}

	
render(){
		return(
			<RoomContext.Provider value={{...this.state}}>
			{this.props.children}
			</RoomContext.Provider>
			);
		}



}
const RoomConsumer = RoomContext.Consumer;
export{RoomContext, RoomProvider, RoomConsumer};