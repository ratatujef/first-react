import React from 'react';
import UiInput from '../UiInput/UiInput.js';
import Filter from '../Filter/Filter.js';
import './SearchPanel.css';

const SearchPanel = (props)=>{
    const placeHolderText = 'Type here to searh';
    return (
        <div className="search-panel mt-3 d-flex justify-content-between input-group mb-3">
            <UiInput type="search" placeholder={placeHolderText}/>
            <Filter {...props} />
            
        </div>
    )
}

export default SearchPanel;
