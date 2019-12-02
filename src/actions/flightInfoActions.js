import { flightInfoService } from '../services/flightInfoService';

export const flightInfoActions = {
  loadFlightInfo
};

function loadFlightInfo() {
  return dispatch => {
    dispatch({ type: 'REQUEST_FLIGHT_INFO' });
    flightInfoService
      .loadFlight()
      .then(response => {
        dispatch({ type: 'LOAD_FLIGHT_INFO', flightInfo: response });
      })
      .catch(error => {
        dispatch({
          type: 'REQUEST_FAILED',
          error
        });
      });
  };
}
