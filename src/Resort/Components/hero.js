import React from 'react';
import ReactDOM from 'react-dom';



export default function Hero({children,hero}){
	return(
		<header className={hero}>
		{children}
		 

		</header>
		)

}
Hero.defaultProps ={
	hero:"defaultHero"
}