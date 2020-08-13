import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NavLink from './navLink'



export default class Navbar extends React.Component{
	constructor(){
		super();
		this.state={
			show:false
		}
		this.toggler = this.toggler.bind(this)
		this.leave= this.leave.bind(this)
	}
	toggler(){
		this.setState({show: !this.state.show})
	}
	leave(){
		this.setState({show: false})


	}
	render(){
    return (
        <nav className="navbar" onMouseLeave={this.leave}>
		<div className="nav-center">
			<div className="nav-header">
				<Link to="/">
						<img src={logo}/>
				</Link>	
				<NavLink style={{display:"inline"}}/>
				<button className="nav-btn" onClick={this.toggler}>
				<FaAlignRight/>

				</button>
				

			</div>
			<div className={this.state.show?"try display":"try"}>



						<NavLink show={this.state.show}/>

				</div>



				
				
		</div>

		
		</nav>

    )
}
}