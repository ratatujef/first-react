import React, {Component} from 'react';

import './ListItem.css';
class ListItem extends Component{
    render(){
        const {removeHandler, itemHandler, title, done, important} = this.props;
        const importantClass = important ? 'todo-list-item--important':'';
        const doneClass = done ? 'todo-list-item--done':'';
        return(
            <div className='d-flex justify-content-between todo-list-item'> 
            <span className={importantClass+' '+doneClass} onClick={()=>itemHandler('done')}>
                {title}
            </span> 
            <div className='btn-group'>
            <button type="button" className='btn btn-outline-danger btn-sm' onClick={removeHandler}>
                <i className="bi bi-trash"/>
            </button>
            <button type="button" className='btn btn-outline-success btn-sm' onClick={()=>itemHandler('important')}>
                <i className='bi bi-exclamation-diamond'/>
            </button>
            </div>
        </div>
        )
    }
}

export default ListItem;
