import React from 'react';
import '../styles/Header.css';

const Header = (props)=>{
    return (
    <div className='header-block'>
       <h2>{props.title}</h2>
        <div className='info'> {3} more to do, {1} done</div>
    </div>)
}
 export default Header;
