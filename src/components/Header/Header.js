import React from 'react';
import './Header.css';

const Header = (props)=>{
    const {data, title} = props;
    const done = data.done.length;
    return (
    <div className='header-block'>
       <h2>{title}</h2>
        <div className='info'> {data.all - done } more to do, {done} done</div>
    </div>)
}
 export default Header;
