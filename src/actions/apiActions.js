// @flow
export const LOADING_API = 'LOADING_API';

export const loadingApi = (isLoading: boolean) => ({
  type: LOADING_API,
  isLoading,
});

export function loadingApiToggle(dispatch: () => void, loading: boolean) {
  dispatch(loadingApi(loading));
}
