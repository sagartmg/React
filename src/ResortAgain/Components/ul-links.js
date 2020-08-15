import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

export default function ULO(){
	return(
		<ul className="ulo">
					<li>
						<Link to="/home" style={{textDecoration:"none"}} >
						Home
						</Link>
					</li>
					<li>
							<Link to="/menu" >
							Menu
							</Link>
					</li>

				</ul>

		)
}


