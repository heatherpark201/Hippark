import React from 'react';
import { Input } from '../Forms';

function DiscoverFilterBar({ type, setType }) {

const handleClick = e => {
    return setType(e)
}
    

    return (
        <div className='filter-bar'>
            <button className = 'filter-buttons' onClick={(e) => handleClick(e.target.value)} type='button' value='lodge'>Lodge</button>
            <button className = 'filter-buttons' onClick={(e) => handleClick(e.target.value)} type='button' value='RV'>RV</button>
            <button className = 'filter-buttons' onClick={(e) => handleClick(e.target.value)} type='button' value='campsite'>Campsite</button>
          
        </div>
    )
}

export default DiscoverFilterBar;
