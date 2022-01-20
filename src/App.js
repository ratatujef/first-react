import React from 'react';

import AppHeader from './components/Header';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';

const App=()=>{
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}

export default App;
