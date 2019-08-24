import { GET_NEARBY_LOCATION } from './types';
import axios from 'axios';

export const getLocationDetails = address => dispatch => {
  axios
    .get(`http://localhost:5000/api/locationfinder/${address}`)
    .then(res => {
      console.log('Address:', res.data);
      dispatch({
        type: GET_NEARBY_LOCATION,
        payload: res.data.results[0]
        // payload: res.data
      });
    })
    .catch(err => {
      console.log('Address load error: ', err);
    });
};
