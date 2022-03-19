import React from 'react';

const Filter = ()=>{
    return (
        <div className='brn-group'>
            <button type='button' className='btn me-2 btn-info'>
                All
            </button>
            <button type='button' className='btn me-2 btn-outline-secondary'>
                Active
            </button>
            <button type='button' className='btn  btn-outline-secondary'>
                Done
            </button>
            
        </div>
    )
}
export default Filter;