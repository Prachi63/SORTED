// the property of card is defined in cardlist as names of days
//this component joes the job of displaying everyhting 

import React from 'react';


const Card = (props) => {
	const {name} = props; // destructured here so do not have to use 'props.name' everytime
	return (
		<div className  = 
		'bg-light-silver dib br3 pa3 ma2 grow ba bw4 ba b--navy shadow-5'>
		<img alt = 'task' src = {
		`https://avatars.dicebear.com/v2/female/:${props.id}.svg`} />
		<div className = 'tc'>
			<h2> {name} </h2>

			<button color = 'danger' onClick = {() => props.detectClick(props.id)}>Edit task </button>

		</div>
		</div>
		);
}

export default Card;