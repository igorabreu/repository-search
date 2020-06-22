import React, { useReducer } from 'react';

import { AppContext, AppReducers, AppInitialState } from 'state';

export interface Props {
  children: React.ReactNode;
  initialState?: IState;
}

interface IState {
  repositories: any[];
  noResults: boolean;
  loading: boolean;
}

const AppProvider: React.SFC<Props> = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(
    AppReducers,
    initialState || AppInitialState
  ) as any;

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
