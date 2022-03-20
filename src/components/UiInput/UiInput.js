import React from 'react';

const UiInput = (props)=> <input className="form-control me-3" 
	type={props.type} 
	placeholder={props.placeholder}
	onChange={(event)=>props.inputHandler(event.target.value)}
	value={props.value}
/>;
UiInput.propTypes=[Any];
export default UiInput;
