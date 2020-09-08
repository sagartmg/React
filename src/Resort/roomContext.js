import React from 'react';
import ReactDOM from 'react-dom';
import items from './data'

 const RoomContext = React.createContext();
 
 class RoomProvider extends React.Component{
 	constructor(){
 		super();
 		this.state={
 			filteredRoom:[],
 	 	room:[],
 	 	sortedRooms:[],
 	 	loading:true

 		}
 		this.getRoom= this.getRoom.bind(this)
 	}

 	 

componentDidMount(){
	let room = this.formatData(items);
	// console.log("rooms",rooms);
	let filteredRoom =room.filter(element=>element.featured===true);
	console.log("filteredRoom",filteredRoom);
		this.setState({room,filteredRoom,sortedRooms:room})
	

}

getRoom(slugg){
	let tempRooms = [...this.state.room]
	console.log('tempRooms',tempRooms);
	const room = tempRooms.find(room=>room.slug == slugg);
	return room;
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
			<RoomContext.Provider value={{...this.state,getroom:this.getRoom}}>
			{this.props.children}
			</RoomContext.Provider>
			);
		}



}
const RoomConsumer = RoomContext.Consumer;


export function WithRoomConsumer(Component){ 
	return function ConsumerWrapper(props){
		return <RoomConsumer>
		{value =>  <Component {...props}  context={value}/>}
		</RoomConsumer>
	}
	

}


export{RoomContext, RoomProvider, RoomConsumer};