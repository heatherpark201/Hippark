import React, {useState} from 'react';
import { Input } from '../Forms';


function DiscoverFilterBar({ type, setType }) {
    const [activeButton, setActiveButton] = useState('inactiveButton')

    const handleClick = ((e) => {
        setType({type : e.target.value})
            setActiveButton('activeButton')
    })

    
    return (
        <div className='filter-bar'>
            <div className='discover-bar_filter-wrapper'>
                <div className={activeButton}>
                    <button className='filter-button' onClick={handleClick} value='campsite'>
                        <i id='filter-icon'
                        className='fas fa-campground'></i>
                        <span>Campsites</span>
                    </button>
                </div>
            </div>
            <div className='discover-bar_filter-wrapper'>
                <div className={activeButton}>
                    <button className='filter-button' onClick={handleClick}  value='RV'>
                        <i className='fas fa-caravan'></i>
                        <span>RV</span>
                    </button>
                </div>
            </div>
            <div className='discover-bar_filter-wrapper'>
                <div className={activeButton}>
                    <button className='filter-button' onClick={handleClick}  value='lodge'>
                        <i className='fas fa-home'></i>
                        <span>Lodging</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DiscoverFilterBar;
