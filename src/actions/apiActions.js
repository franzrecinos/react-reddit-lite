export const LOADING_API = 'LOADING_API';

export const loadingApi = isLoading => ({
  type: LOADING_API,
  isLoading,
});

export function loadingApiToggle(dispatch, loading) {
  console.log(loading)
  dispatch(loadingApi(loading));
}
