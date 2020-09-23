import React from 'react'
import CreateClient from './contentfulAPISetup';




	const PortfolioContext = React.createContext();
     class ContentfulDataRetrival extends React.Component{
     	constructor(props){
     		super(props);
     		 this.state = {
     	response:[]
     	


     	}
     	


    
	}

	getData = async()=>{
		try{
			let response = await CreateClient.getEntries({
			content_type:"personalPortfolio"


			});
			console.log("response as ",response.items)
			// contentfulData = response.items;
			// console.log("contentfulData",contentfulData);
			this.setState({response:response.items})


		}
		catch(error){
			console.log(error)
		}
	}

	componentDidMount(){
		this.getData();

	}
	
	render(){

		return(<PortfolioContext.Provider value={{...this.state}}>
					{this.props.children}
					</PortfolioContext.Provider>
			)

}

}

export {PortfolioContext, ContentfulDataRetrival}
