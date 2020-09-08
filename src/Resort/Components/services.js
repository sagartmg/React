import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FaCocktail } from 'react-icons/fa';
import { FaAirbnb } from 'react-icons/fa';

import { FaAngellist } from 'react-icons/fa';

import { RiAwardLine } from 'react-icons/ri';
import { BsFillBagFill } from "react-icons/bs";





export default function Services() {
    return (
    	<div className = "services">
    		<div className='services-items'>
    		<div>
    		<BsFillBagFill/>
    		</div>
    		<p>
    		this is just a dummy text you dummy people. 
    		</p>


    		</div> 

    		<div className='services-items'>
    		<div>
    		<FaAngellist/>
    		</div>
    		<p>
    		this is just a dummy text you dummy people. 
    		</p>


    		</div> 
    		<div className='services-items'>
    		<div>
    		<BsFillBagFill/>
    		</div>
    		<p>
    		this is just a dummy text you dummy people. 
    		</p>


    		</div> 
    		<div className='services-items'>
    		<div>
    		<FaAngellist/>
    		</div>
    		<p>
    		this is just a dummy text you dummy people. 
    		</p>


    		</div> 
    	</div>
    	)
        		
}