import React, {Component }from 'react'
import Cardlist from './Cardlist';
import { task_cards } from './task_cards'; // { task_cards } destuctured because there is no export default 
import 'tachyons'
import SearchBox from './SearchBox'

// state is used to create a connection between search box and robots
// the parent component receives state and passes to the children as props
 class App extends Component {
	constructor() {
		super()
		// calls constructor of the component
		// need to use super in order to use this 
		//this is a pointer to the class
		this.state = {
			task_cards: task_cards,
			searchfield: ''
		}
	}
// any time you make your own function in a class 
//use the below mwntioned syntax
	onSearchChange = (event) => {
		//setState is predefined function of react always usd this to 
		// set the value of the search field in this case
		this.setState({ searchfield: event.target.value})
		}

	 render() {
		const filteredCards = this.state.task_cards.filter(task_cards =>{
			return task_cards.name.toLowerCase().includes(
				this.state.searchfield.toLowerCase());
		} )



		return (
	<div>
	<h1 className = 'tc bg-light-blue'> Task Organizer </h1>
	<SearchBox searchChange = {this.onSearchChange}/>
	<Cardlist task_cards = {filteredCards}/>
	</div>
	);
	}
}

export default App;

