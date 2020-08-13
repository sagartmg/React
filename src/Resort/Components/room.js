import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Hero from './hero'
import Banner from './banner'
import Services from './services'



export default function Room(){
	return(
		<>
		<Hero hero="roomsHero" children=<Banner/>/>
		<Services/>
		</>
		)
}