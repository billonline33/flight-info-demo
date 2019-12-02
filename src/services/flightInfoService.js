import { apiConstants } from '../constants/api.constants';
import axios from 'axios';

export const flightInfoService = {
  loadFlight: loadFlightInfo
};

function loadFlightInfo() {
  const url = apiConstants.baseURL;
  return axios
    .get(url)
    .then(response => response.data)
    .then(data => {
      return data;
    });
}
