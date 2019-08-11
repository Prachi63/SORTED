import React from 'react';
import 'tachyons'


const SearchBox = ({searchfield, searchChange}) => {
	return (
			<div className = 'tc pa2'>
			<input className = 'pa3 ba b--green bg-lightest-blue' 
			type = 'search' placeholder = 'search day name' 	
			onChange = {searchChange}/>
		
			</div>

		);
}

export default SearchBox;