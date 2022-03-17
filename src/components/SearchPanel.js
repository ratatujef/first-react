import React from 'react';
import UiInput from './UiInput';
import Filter from './Filter.js';
import '../styles/SearchPanel.css';

const SearchPanel = ()=>{
    const placeHolderText = 'Type here to searh';
    return (
        <div className="search-panel mt-3 d-flex justify-content-between input-group mb-3">
            <UiInput type="search" placeholder={placeHolderText}/>
            <Filter />
            
        </div>
    )
}

export default SearchPanel;
