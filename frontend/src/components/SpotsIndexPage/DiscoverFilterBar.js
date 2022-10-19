import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/fontawesome-free-solid'
import { faCar } from '@fortawesome/fontawesome-free-solid'
import { faHome } from '@fortawesome/fontawesome-free-solid'
import { faSearch } from '@fortawesome/fontawesome-free-solid'



function DiscoverFilterBar({ type, setType }) {
    const [activeButtonCamp, setActiveButtonCamp] = useState('inactiveButtonCamp')
    const [activeButtonRv, setActiveButtonRv] = useState('inactiveButtonRv')
    const [activeButtonLodge, setActiveButtonLodge] = useState('inactiveButtonLodge')

    const handleClickCamp = ((e) => {
        setType({type : e.target.value})
        setActiveButtonCamp('activeButtonCamp')
    })

    const handleClickRv = ((e) => {
        setType({type : e.target.value})
        setActiveButtonRv('activeButtonRv')
    })

    const handleClickLodge = ((e) => {
        setType({type : e.target.value})
        setActiveButtonLodge('activeButtonLodge')
    })

    const handleClickClear = (() => {
        setType({type : 'null'})
    })

    
    return (
        <div className='filter-bar'>
            <div className='discover-bar_filter-wrapper'>
                <div className={activeButtonCamp}>
                    <button className='filter-button' onClick={handleClickCamp} value='campsite'>
                    <div className="input-icon-disc"><FontAwesomeIcon icon={faFire} /></div>
                        <span>Campsites</span>
                    </button>
                </div>
            </div>
            <div className='discover-bar_filter-wrapper'>
                <div className={activeButtonRv}>
                    <button className='filter-button' onClick={handleClickRv} value='RV'>
                    <div className="input-icon-disc"><FontAwesomeIcon icon={faCar} /></div>
                        <span>RV</span>
                    </button>
                </div>
            </div>
            <div className='discover-bar_filter-wrapper'>
                <div className={activeButtonLodge}>
                    <button className='filter-button' onClick={handleClickLodge} value='lodge'>
                    <div className="input-icon-disc"><FontAwesomeIcon icon={faHome} /></div>
                        <span>Lodging</span>
                    </button>
                </div>
            </div>
            <div className='discover-bar_filter-wrapper'>
                <div className='inactive-button'>
                    <button className='filter-button' onClick={handleClickClear} value='null'>
                    <div className="input-icon-disc"><FontAwesomeIcon icon={faSearch} /></div>
                        <span>Clear Filter</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DiscoverFilterBar;
