import React from 'react';
import UiButton from '../UIButton/UiButton.js';


const Filter = ({activeFilter, updateFilter})=>{
	const filters = ['all', 'active', 'done'];
	const btns = filters.map((filter)=>{

		const className = activeFilter===filter ? 'btn-info':'btn-outline-secondary';
		return (
			<UiButton title={filter} key={filter} className={className} updateFilter={updateFilter}/>
		);
	});
	return (
		<div className='brn-group'>
			{ btns }
		</div>
	);
};
Filter.propTypes={
	activeFilter: propTypes.function.isReguired,
	updateFilter: propTypes.function.isReguired
};
export default Filter;