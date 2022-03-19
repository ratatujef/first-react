import React, {Component} from 'react';

import './ListItem.css';
class ListItem extends Component{
    
    state={
        done: false,
        important: this.props.important
    };

    markDone=()=>{
        this.setState({
            done: true
        })
    }
   markImportant=()=>{
    this.setState((state)=>{
        return state.important= !this.state.important
    })
   }
    
    render(){
        const importantClass = this.state.important ? 'todo-list-item--important':'';
        const doneClass = this.state.done ? 'todo-list-item--done':'';
        const {removeHandler, title} = this.props;
        return(
            <div className='d-flex justify-content-between todo-list-item'> 
            <span className={importantClass+' '+doneClass} onClick={this.markDone}>
                {title}
            </span> 
            <div className='btn-group'>
            <button type="button" className='btn btn-outline-success btn-sm' onClick={removeHandler}>
                <i className="bi bi-trash"/>
            </button>
            <button type="button" className='btn btn-outline-danger btn-sm' onClick={this.markImportant}>
                <i className='bi bi-exclamation-diamond'/>
            </button>
            </div>
        </div>
        )
    }
}

export default ListItem;
