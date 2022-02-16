import React from 'react';
import UiInput from './UiInput';
const SearchPanel = ()=>{
    const placeHolderText = 'Type here to searh';
    return (
        <div className="input-group mb-3">
            <UiInput type="search" placeholder={placeHolderText}/>
        </div>
    )
}

export default SearchPanel;
