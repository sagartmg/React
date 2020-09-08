import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'



export default function NavLink(props){
	return(
		<>


						<ul className="remove" >
							<li><Link to="/" style={{ textDecoration: 'none'}}>Home</Link></li>
							<li><Link to="/room" style={{ textDecoration: 'none' }}>Room</Link></li>



						</ul>

				</>

		)
}