import { createContext } from 'react';

interface IContextProps {
  state: IState;
  dispatch: ({ type, payload }: { type: string, payload: any }) => void;
}

interface IState {
  repositories: any[],
  noResults: boolean,
  loading: boolean,
}

enum ActionTypes {
  SET_LOADING,
  SET_NO_RESULTS,
  REPOSITORIES_FETCHED,
}

interface IActionInterface {
  type: keyof typeof ActionTypes;
  payload: any;
}

export const AppContext = createContext({} as IContextProps);

export const AppReducers = (state: object, action: IActionInterface) => {

  const { type, payload } = action;

  const actions = {
    REPOSITORIES_FETCHED: {
      ...state,
      repositories: payload ?? [],
    },
    SET_NO_RESULTS: { ...state, noResults: payload },
    SET_LOADING: { ...state, loading: payload },
  };

  return actions[type];
};

export const AppInitialState = {
  repositories: [],
  noResults: false,
  loading: false,
};
