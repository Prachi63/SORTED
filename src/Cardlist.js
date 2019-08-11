//returns the names of days as aelements of array
import React, {Component }from 'react'
import Card from './Card';
import EditCard from './EditCards'
import {task_cards} from './task_cards'

class Cardlist extends Component {
	constructor(props){
		super(props)
		this.state = {
			task_cards: task_cards,
			editing: false,
			task_value:[], 
			task_id: 0
		}
	}

detectClick = (id) => {
 	this.setState ({editing: true});
 	this.setState({task_id: id - 1});
 	console.log(this.state.task_id);
 	this.state.task_cards[this.state.task_id].task = this.state.task_value
 	console.log(this.state.task_value)
 	
}

save  = (id) => {
this.setState ({editing: false});

}

 save_tasks =(event) => {
 	this.setState({task_value: event.target.value})

 	
 	}

edit_page = () => {
this.state.task_cards.map((user,i)=> { //each element of the array is a user
		return (<EditCard key = {i}  // only needed for react to rmember if this element is deleted
			id = {task_cards[i].id} 
			name = {task_cards[i].name}
			detectClick = {this.detectClick.bind(this)}
			/>);
	})
}

render(){
	let {task_cards} = this.props
	const cardComponent = task_cards.map((user,i)=> { //each element of the array is a user
		return (<Card key = {i}  // only needed for react to rmember if this element is deleted
			id = {task_cards[i].id} 
			name = {task_cards[i].name}
			detectClick = {this.detectClick.bind(this)}
		/>);
	})

// const EditCardComponent = task_cards.map((user,i)=> { //each element of the array is a user
// 		return (<EditCard key = {i}  // only needed for react to rmember if this element is deleted
// 			id = {task_cards[i].id} 
// 			name = {task_cards[i].name}
// 			save = {this.save.bind(this)}
// 			update = {this.save_tasks.bind(this)}
// 			show = {this.state.task_value}
// 			/>);
// 	})

const EditCardComponent = //each element of the array is a user
		<EditCard  // only needed for react to rmember if this element is deleted
			id = {this.state.task_id + 1}
			name = {task_cards[this.state.task_id].name}
			save = {this.save.bind(this)}
			update = {this.save_tasks.bind(this)}
			task = {task_cards[this.state.task_id].task}
			/>

    if (!this.state.editing){
	return (
		<div>
		{cardComponent}
	</div>);
	} else {
		return (<div>{EditCardComponent}
		<br/>
		<br/>
		{cardComponent}
		</div>);
		}
	}
}
export default Cardlist;

