import React from 'react';
import { Input } from '../Forms';

function DiscoverFilterBar({ type, setType }) {
    

    return (
        <div className='search-bar'>
            <button onClick={(e) => setType(e.target.value)} type='button' value='lodge'>Lodge</button>
            <button onClick={(e) => setType(e.target.value)} type='button' value='RV'>RV</button>
            <button onClick={(e) => setType(e.target.value)} type='button' value='campsite'>Campsite</button>
          
        </div>
    )
}

export default DiscoverFilterBar;
