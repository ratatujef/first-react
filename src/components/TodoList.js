import React from 'react';
import ListItem from './ListItem';
import '../styles/todo.css';
const ToDoList = (props)=>{
    return (
    <ul className='list-group todo-list'>
        {props.itemList.map(
            (props) => 
            <li className="list-group-item" key={props.id}> 
                <ListItem  important={props.important} taskName={props.title}/>
            </li>
        )
        }
    </ul>
    )
};

export default ToDoList;
