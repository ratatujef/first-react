import React from 'react';
import ListItem from './ListItem';
import '../styles/TodoList.css';

const ToDoList = (props)=>{
    const {removeHandler, itemList }=props;

    const elems = itemList.map((el) => {
        const{id, ...elProps} = el;
        return(
            <li className="list-group-item" key={id}> 
                <ListItem  
                    removeHandler={()=>removeHandler(id)} 
                    { ...elProps }
                    // important={important} 
                    // taskName={title} 
                    />
            </li>
        )
    })
    return (
    <ul className='list-group todo-list'>
        { elems }
    </ul>
    )
};

export default ToDoList;
