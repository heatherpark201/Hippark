import React from 'react';
import { Input } from '../Forms';

function DiscoverFilterBar({ type, setType }) {



    return (
        <div className='filter-bar'>
            <button className = 'filter-buttons' onClick={(e) => setType({type : e.target.value})}  value='lodge'>Lodge</button>
            <button className = 'filter-buttons' onClick={(e) => setType({type : e.target.value})}  value='RV'>RV</button>
            <button className = 'filter-buttons' onClick={(e) => setType({type: e.target.value})} value='campsite'>Campsite</button>
        </div>
    )
}

export default DiscoverFilterBar;
