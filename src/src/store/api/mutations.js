export function SET_CLOUDS(state, payload) {
  state.clouds = payload;
}


export function API_FAILURE(state, newValue) {
  state.apiError = newValue;
}


export function SET_LOADING(state, newValue) {
  state.loading = newValue;
}
