import React, { useState }from "react";
import { FormErrors, Input } from "../Forms";
import * as spotActions from "../../store/spots";
import { useInput, useSubmit } from "../../hooks";
import { useHistory } from "react-router-dom";
import './HomeSearchForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { faCalendar } from '@fortawesome/fontawesome-free-solid'
import { faUser } from '@fortawesome/fontawesome-free-solid'

function HomeSearchForm( {onSuccess} ) {
    const history = useHistory();
    const [state, onStateChange] = useInput("");
    const [dates, onDatesChange] = useInput("");
    const [guests, onGuestsChange] = useInput("");
    const [errors, onSubmit] = useSubmit({ 
        onSuccess,
        action: spotActions.fetchSpots({state})
    });

    return (
        <>
            <form onSubmit={onSubmit} className="spot-search-form">
                    <div className="where-box">
                        <div className="label">WHERE TO?</div>
                        <div className="input-wrapper">
                            <div className="input-icon"><FontAwesomeIcon icon={faSearch} /></div>
                        <Input 
                            type="text"
                            className="home-input"
                            placeholder="Try California...."
                            value={state}
                            onChange={onStateChange}
                        />
                        </div>
                    </div>
                    <div className="dates-box">
                        <div className="label">DATES</div>
                        <div className="input-wrapper">
                        <div className="input-icon"><FontAwesomeIcon icon={faCalendar} /></div>
                        <Input 
                            className="dates-input"
                            placeholder="Enter Dates"
                            value={dates}
                            onChange={onDatesChange}
                            />
                        </div>
                    </div>
                    <div className="guest-box">
                        <div className="label">GUESTS</div>
                        <div className="input-wrapper">
                        <div className="input-icon"><FontAwesomeIcon icon={faUser} /></div>
                        <Input 
                            className="guests-input"
                            placeholder="Add Guests"
                            value={guests}
                            onChange={onGuestsChange}
                            />
                        </div>
                    </div>
                <button type="submit" className="home-search-submit"><FontAwesomeIcon icon={faSearch}/></button>
            </form>
         </>
    )
};

export default HomeSearchForm;
