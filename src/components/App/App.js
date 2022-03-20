import React from 'react';

import AppHeader from '../Header/Header.js';
import TodoList from '../TodoList/TodoList.js';
import SearchPanel from '../SearchPanel/SearchPanel.js';
import AddItemForm from '../AddItemForm/AddItemForm.js';

import './App.css';
let idNum=10;
const addItem=(text)=>{
    return {title: text, id:idNum++, important:false, done:false } 
    }
export default class App extends React.Component{
    state = {
        data:[
            addItem('first item'),
            addItem('second item'),
            addItem('third item'),
            addItem('and one more'),
        ],
        filter: 'active'
    
    }
    filterItems(){
        switch (this.state.filter){
            case 'done':
                return this.state.data.filter(el=>el.done);
            case 'active':
                return this.state.data.filter(el=> !el.done);
            default: 
                return this.state.data;  
        }
    }
    removeItem=(id)=>{
        this.setState(({data}) => {
             return {data: data.filter(el=> el.id !== id)};
            });
    }
    handleItem=(id, type)=>{
     this.setState(({data})=>{
         const ind= data.findIndex(el=>el.id === id);
         const elToChange = {...data[ind]};
         elToChange[type] = !data[ind][type];
        return {data: [...data.slice(0, ind), elToChange, ...data.slice(ind+1)]}
     })
    }
    addNewItem=(text="new One")=>{
        this.setState(({data})=>{
            return {data:[...data, addItem(text)]};
        })
    }
    updateFilter=(filter)=>{
        this.setState(({filter:filter}))
    }

    render(){
        const { data } = this.state;
        const headerData = {
            all: data.length,
            done: data.filter(item=>item.done),
        }
        const filteredItems = this.filterItems();

        return(
            <div className='container'>
                <AppHeader title={'My own to do list'} data={headerData}/>
                <SearchPanel activeFilter={this.state.filter} updateFilter={this.updateFilter}/>
                <TodoList 
                    removeHandler={this.removeItem} 
                    itemList={filteredItems}
                    itemHandler={this.handleItem}
                />
                <AddItemForm addNewItem={(text)=>this.addNewItem(text)}/>
            </div> 
        )
    }
}

