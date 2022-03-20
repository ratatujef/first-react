import React from 'react';
import ListItem from '../ListItem/ListItem.js';
import './TodoList.css';

const ToDoList = (props)=>{
	const {removeHandler, itemList, itemHandler }=props;

	const elems = itemList.map((el) => {
		const {id, ...elProps} = el;
		return (
			<li className="list-group-item" key={id}> 
				<ListItem  
					removeHandler={()=>removeHandler(id)}
					itemHandler={(type)=>itemHandler(id, type)}
					{ ...elProps }
				/>
			</li>
		);
	});
	return (
		<ul className='list-group todo-list'>
			{ elems }
		</ul>
	);
};
ToDoList.propTypes=[Any]; 
export default ToDoList;
