import React from 'react';

import AppHeader from './components/Header';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';

import './styles/App.css';

export default class App extends React.Component{
    state = {
        data:[
        {id:1,title:'first item', important: false},
        {id:2,title:'second item', important:true},
        {id:3, title:'third item',important:false},
        {id:4,title: 'and one more', important:false}
        ],
        header: 'My own Header'
    }
    updatedData=(id)=>{
        this.setState(({data}) => {
             return {data: data.filter(el=> el.id !== id)};
            });
        
        // this.setState(({data})=>{
        //     const ind = data.findIndex(el=> el.id === id);
        //     data.splice(ind, 1);
        //     return { data: data}
        // })
    }
    consoleID=(id)=>{
        console.log('from app ',id)
    }
    render(){
        return(
            <div className='container'>
            <AppHeader title={this.header}/>
            <SearchPanel/>
            <TodoList removeHandler={this.updatedData} itemList={this.state.data}/>
        </div> 
        )
    }
}

