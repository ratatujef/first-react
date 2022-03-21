/* eslint-disable react/prop-types */
import React from 'react';
import UiButton from '../UIButton/UiButton.js';


const Filter = ({activeFilter, updateFilter})=>{
	const filters = ['all', 'active', 'done'];
	const btns = filters.map((filter)=>{

		const className = activeFilter===filter ? 'btn-info':'btn-outline-secondary';
		return (
			<UiButton 
				title={filter} 
				key={filter} 
				className={className} 
				updateFilter={updateFilter}/>
		);
	});
	return (
		<div className='brn-group'>
			{ btns }
		</div>
	);
};
export default Filter;