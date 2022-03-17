import React from 'react';

const ListItem = (props)=> {
    const style = {
        color: props.important ? 'steelBlue': "#666",
        fontWeight: props.important ? 'bold': 'normal'
    };
 return  (
    <div className='d-flex justify-content-between todo-list-item'> 
        <span style={style} className={props.important}>
            {props.taskName}
        </span> 
        <div className='btn-group'>
        <button type="button" className='btn btn-online-success btn-sm'>
            ok
        </button>
        <button type="button" className='btn btn-online-danger btn-sm'>
            <i className='fa fa-trash-o'/>
            mark
        </button>
        </div>
    </div>
    )};

export default ListItem;
