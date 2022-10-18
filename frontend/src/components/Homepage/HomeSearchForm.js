import React, { useState, useInput, useSubmit }from "react";
import { FormErrors, Input } from "../Forms";
import * as spotActions from "../../store/spots";



function HomeSearchForm( {onSuccess} ) {
    const [state, onStateChange] = useInput("");
    const [dates, onDatesChange] = useInput("")
    const [errors, onSubmit] = useSubmit({ 
        onSuccess,
        action: spotActions.fetchSpots({ state})
    });

    return (
        <>
            <form onSubmit={onSubmit} className="spot-search-form">
                <FormErrors errors={errors}/>
                    <div className="where-box">
                        <div className="label">WHERE TO?</div>
                        <div className="input-wrapper">
                            <div className="input-icon">Magglass</div>
                        <Input 
                            className="home-input"
                            placeholder="Try California...."
                            value={state}
                            onChange={onStateChange}
                            required
                            />
                        </div>
                    </div>
                    {/* <div className="dates-box">
                        <div className="label">DATES</div>
                        <div className="input-wrapper">
                            <div className="input-icon">Cal</div>
                        <Input 
                            className="Dates-input"
                            placeholder="Enter Dates"
                            value={dates}
                            onChange={onDatesChange}
                            />
                        </div>
                    </div>
                    <div className="guest-box">
                        <div className="label">GUESTS</div>
                        <div className="input-wrapper">
                            <div className="input-icon">Person</div>
                        <Input 
                            className="Guests-input"
                            placeholder="Add Guests"
                            value={guests}
                            onChange={onGuestsChange}
                            />
                        </div>
                    </div> */}

                <button type="submit" className="home-search-submit">Search Icon</button>
            </form>
         </>
    )
};

export default HomeSearchForm;
