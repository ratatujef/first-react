import React from 'react';
import './UIButton.css';
const UiButton = (props)=>{
	return (
		<button type='button' onClick={()=>props.updateFilter(props.title)} className={`${props.className} btn me-2`}>
			{props.title}
		</button>
	);
};
UiButton.propTypes = [Any];
export default UiButton;