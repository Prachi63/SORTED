import React, {Component }from 'react'


class editTask extends component {
	render(){
		return (
			<div> <button onClick = {(e) => {e.preventDefault();
				this.clicked();}}> edit task </button></div>
		);
	}
}


export default editTask;