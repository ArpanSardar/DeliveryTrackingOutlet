import { GET_NEARBY_LOCATION } from '../Actions/types';

const initialState = {
  address: null,
  isLoading: false,
  user: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEARBY_LOCATION:
      return {
        ...state,
        address: action.payload
      };
    default:
      return state;
  }
}
