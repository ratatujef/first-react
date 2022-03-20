import React from 'react';

const UiButton = (props)=>{
    return (
        <button type='button' onClick={()=>props.updateFilter(props.title)} className={`${props.className} btn me-2`}>
                {props.title}
        </button>
    )
}
export default UiButton;