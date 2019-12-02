let initialState = {
  flightInfo: [],
  isLoading: false,
  error: null
};

export function flightInfoReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_FLIGHT_INFO':
      return { ...state, isLoading: true };
    case 'LOAD_FLIGHT_INFO':
      return { ...state, flightInfo: action.flightInfo, isLoading: false };
    case 'REQUEST_FAILED':
      return { ...state, error: action.error };
    default:
      return state;
  }
}
