import csrfFetch from "./csrf";
import { addReviews } from "./reviews";
import { addUsers } from './users';

const SET_SPOTS = 'spots/setSpots';
const ADD_SPOT = 'spots/addSpot';

const setSpots = spots => ({
    type: SET_SPOTS,
    payload: spots
})

export const addSpot = spot => ({
    type: ADD_SPOT,
    payload: spot
})


export const fetchSpots = (filter) => async dispatch => {
    const filterParams = new URLSearchParams(filter);
    const response = await csrfFetch(`/api/spots?${filterParams}`);
    const data = await response.json();
    dispatch(setSpots(data));
    return response;
  };
  
  export const fetchSpot = spotId => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`);
    const data = await response.json();
    dispatch(addSpot(data));
    dispatch(addUsers(data));
    dispatch(addReviews(data.reviews));
    return response;
  }
  
//   export const createSpot = spotFormData => async dispatch => {
//     const response = await csrfFetch("/api/spots", {
//       method: "POST",
//       body: spotFormData
//     });
//     const data = await response.json();
//     dispatch(addSpot(data.spot));
//     return response;
//   };
  
  function spotsReducer(state = {}, action) {
    switch (action.type) {
      case SET_SPOTS:
        return action.payload;
      case ADD_SPOT:
        const spot = action.payload;
        return { ...state, [spot.id]: spot };
      default:
        return state;
    }
  }
  
  export default spotsReducer;
  