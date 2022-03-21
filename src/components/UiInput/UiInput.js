import React from 'react';

const UiInput = (props)=> <input className="form-control me-3" 
	placeholder={props.placeholder}
	onChange={(event)=>props.inputHandler(event.target.value)}
	value={props.value}
/>;
export default UiInput;
