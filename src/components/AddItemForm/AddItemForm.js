import React from 'react';
import UiInput from '../UiInput/UiInput.js';

const AddItemForm = (props)=>{

    return(
        <div className="d-flex mt-3">
            <UiInput/>
            <button type="button" onClick={()=>{props.addNewItem()}} className='btn btn-outline-secondary'> Add </button>
        </div>
    )
}
export default AddItemForm;