import React, {useState} from 'react';
import { Input } from '../Forms';

function DiscoverFilterBar({ filter, setFilter }) {
    const [listingType, setListingType] = useState();

    const filterButtons = e => {
        setListingType(e.target.value);
    }


    return (
        <div className='discover-bar'>
            <h3 id='filter'>Check:</h3>
            <button onClick={filterButtons} type="button" value="All">All</button>
            <button onClick={filterButtons} type="button" value="lodge">Lodging</button>
            <button onClick={filterButtons} type="button" value="campsite">Camping</button>
            <button onClick={filterButtons} type="button" value="tent">Tenting</button>
        </div>
    )
}

export default DiscoverFilterBar;