export const SortSpots = (spots, {type, guests, place}) => {
    // let trueCount = 3
    // let typeProp = true;
    // let guestsProp = true;
    // let placeProp = true;


    // if (!type) {
    //     typeProp = false;
    //     trueCount --;
    // }

    // if (!guests) {
    //     guestsProp = false;
    //     trueCount --;
    // }

    // if (!place) {
    //     placeProp = false;
    //     trueCount --;
    // }


    // if (trueCount === 3) {
    //     spots.filter((spot) => spot.type === type && spot.maxGuests <= guests && spot.state === place)
    // } else if (trueCount === 2 ) {
    //     if (!typeProp) {
    //         spots.filter((spot) => spot.maxGuests <= guests && spot.place === place)
    //     } else if (!guestsProp) {
    //         spots.filter((spot) => spot.type === type && spot.place === place)
    //     } else {
    //         spots.filter((spot) => spot.type === type && spot.maxGuests <= guests )
    //     }
    // } else if (trueCount === 1) {
    //     spots.filter((spot) => spot.type === type)
    //     spots.filter((spot) => spot.maxGuests === guests)
    //     spots.filter((spot) => spot.place === place)
    // } else {
    //     return spots;
    // }
    let sorted = [];

    if (type === null) {
        spots.forEach =(spot) => {
            if (spot.maxGuests <= guests && spot.state ===  place) {
                sorted.push(spot);
            }
        }
    }

 return 'hello'
}

