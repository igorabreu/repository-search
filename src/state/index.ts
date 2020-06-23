import { createContext } from 'react';

interface IContextProps {
  state: IState;
  dispatch: ({ type, payload }: { type: string, payload: any }) => void;
}

interface IState {
  repositories: any[],
  noResults: boolean,
  loading: boolean,
  error: boolean,
}

enum ActionTypes {
  SET_LOADING,
  SET_NO_RESULTS,
  SET_REPOSITORIES,
  SET_ERROR
}

interface IActionInterface {
  type: keyof typeof ActionTypes;
  payload: any;
}

export const AppContext = createContext({} as IContextProps);

export const AppReducers = (state: object, action: IActionInterface) => {

  const { type, payload } = action;

  const actions = {
    SET_REPOSITORIES: {
      ...state,
      repositories: payload ?? [],
    },
    SET_NO_RESULTS: { ...state, noResults: payload },
    SET_LOADING: { ...state, loading: payload },
    SET_ERROR: { ...state, error: payload },
  };

  return actions[type];
};

export const AppInitialState = {
  repositories: [],
  noResults: false,
  loading: false,
  error: false,
};
