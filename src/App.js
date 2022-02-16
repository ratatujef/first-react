import React from 'react';

import AppHeader from './components/Header';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';

const App=()=>{
    const list = ['first item', 'second item', 'third item'];
    return (
        <div className='container'>
            <AppHeader/>
            <SearchPanel/>
            <TodoList itemList={list}/>
        </div>
    )
}

export default App;
