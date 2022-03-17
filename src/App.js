import React from 'react';

import AppHeader from './components/Header';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';

const App=()=>{
    const list = [
        {id:1,title:'first item', important: false},
        {id:2,title:'second item', important:true},
        {id:3, title:'third item',important:false},
        {id:4,title: 'and one more', important:false}
    ];
    const header = 'My own to do list'
    return (
        <div className='container'>
            <AppHeader title={header}/>
            <SearchPanel/>
            <TodoList itemList={list}/>
        </div>
    )
}

export default App;
