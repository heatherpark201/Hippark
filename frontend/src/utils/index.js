export const SortSpots = (spots, {type, guests, state}) => {
    let trueCount = 3
    let typeProp = true;
    let guestsProp = true;
    let stateProp = true;


    if (!type) {
        typeProp = false;
        trueCount --;
    }

    if (!guests) {
        guestsProp = false;
        trueCount --;
    }

    if (!state) {
        stateProp = false;
        trueCount --;
    }


    if (trueCount === 3) {
        spots.filter((spot) => spot.type === type && spot.maxGuests <= guests && spot.state === state)
    } else if (trueCount === 2 ) {
        if (!typeProp) {
            spots.filter((spot) => spot.maxGuests <= guests && spot.state === state)
        } else if (!guestsProp) {
            spots.filter((spot) => spot.type === type && spot.state === state)
        } else {
            spots.filter((spot) => spot.type === type && spot.maxGuests <= guests )
        }
    } else if (trueCount === 1) {
        spots.filter((spot) => spot.type === type)
        spots.filter((spot) => spot.maxGuests === guests)
        spots.filter((spot) => spot.state === state)
    } else {
        return spots;
    }
}