import { IApiResponse, IDispatche } from './types';


export const onSearchDispatches = (dispatch: ({ type, payload }: IDispatche) => void) => {
  dispatch({ type: 'SET_ERROR', payload: false });
  dispatch({ type: 'SET_NO_RESULTS', payload: false });
  dispatch({ type: 'SET_LOADING', payload: true });
}

export const onErrorDispatches = (dispatch: ({ type, payload }: IDispatche) => void) => {
  dispatch({ type: 'SET_REPOSITORIES', payload: [] });
  dispatch({ type: 'SET_ERROR', payload: true });
}

export const onSetResultDispaches = (result: IApiResponse, dispatch: ({ type, payload }: IDispatche) => void) => {
  dispatch({ type: 'SET_REPOSITORIES', payload: result.data.items });
  !result.data.items.length &&
    dispatch({ type: 'SET_NO_RESULTS', payload: true });
}
