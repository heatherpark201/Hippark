import React, { useState }from "react";
import { FormErrors, Input } from "../Forms";
import * as spotActions from "../../store/spots";
import { useInput, useSubmit } from "../../hooks";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";
import './HomeSearchForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { faCalendar } from '@fortawesome/fontawesome-free-solid'
import { faUser } from '@fortawesome/fontawesome-free-solid'

function HomeSearchForm() {
    const history = useHistory();
    const [place, setPlace] = useState('');
    const [dates, setDates] = useState('');
    const [guests, setGuests] = useState(1);
    // const [state, onStateChange] = useInput("");
    // const [dates, onDatesChange] = useInput("");
    // const [guests, onGuestsChange] = useInput("");
    // const [errors, onSubmit] = useSubmit({ 
    //     onSuccess,
    //     action: spotActions.fetchSpots()
    // });

    const handleSubmit = (() => {
        history.push(`/spots/${place}/${guests}`);
    })


    
    return (
        <>
            <form onSubmit={handleSubmit} className="spot-search-form">
                    <div className="where-box">
                        <div className="label">WHERE TO?</div>
                        <div className="input-wrapper">
                            <div className="input-icon"><FontAwesomeIcon icon={faSearch} /></div>
                        <Input 
                            type="text"
                            className="home-input"
                            placeholder="Try California...."
                            value={place}
                            onChange={(e) => (setPlace(e.target.value))}
                            required
                        />
                        </div>
                    </div>
                    <div className="dates-box">
                        <div className="label">DATES</div>
                        <div className="input-wrapper">
                        <div className="input-icon"><FontAwesomeIcon icon={faCalendar} /></div>
                        <Input 
                            type="text"
                            className="dates-input"
                            placeholder="Enter Dates"
                            value={dates}
                            onChange={(e) => (setDates({dates : e.target.value}))}
                            />
                        </div>
                    </div>
                    <div className="guest-box">
                        <div className="label">GUESTS</div>
                        <div className="input-wrapper">
                        <div className="input-icon"><FontAwesomeIcon icon={faUser} /></div>
                        <Input 
                            type="number"
                            className="guests-input"
                            placeholder="Add Guests"
                            value={guests}
                            onChange={(e) => (setGuests(e.target.value))}
                            required
                            />
                        </div>
                    </div>
                <button type="button" className="home-search-submit" onClick={handleSubmit}><FontAwesomeIcon icon={faSearch}/></button>
            </form>
         </>
    )
};

export default HomeSearchForm;
