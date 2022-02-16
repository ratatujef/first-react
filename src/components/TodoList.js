import React from 'react';
import ListItem from './ListItem';

const ToDoList = (props)=>{
    return (
    <ul>
        {props.itemList.map((item, index) => <li key={index}> <ListItem taskName={item}/></li>)}
    </ul>
    )
};

export default ToDoList;
