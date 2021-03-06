import { createContext } from 'react';
import {
  GISTINITIALSTATE, LOGIN, LOGOUT, VISIBLESCREEN, SEARCH, PROFILEIMG,
} from '../constants/index';

import { dispatch, StateType } from '../types/ContextTypes';

export const initialState: StateType = GISTINITIALSTATE;

export type Action =
  | {
    type: 'LOGIN', payload: {
      isLoggedin: boolean,
      userName: string
    }
  }
  | {
    type: 'LOGOUT', payload: {
      isLoggedin: boolean,
      tab: number
    }
  }
  | {
    type: 'VISIBLESCREEN', payload: {
      gistID: string,
      tab: number
    }
  }
  | {
    type: 'SEARCH', payload: {
      searchValue: string,
      tab: number
    }
  }
  | {
    type: 'PROFILEIMG', payload:{
      imgURL : string
    }
  }

export const GistContext = createContext<{
  state: StateType;
  dispatch: dispatch;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const GistReducer = (state: StateType, action: Action): StateType => {
  const {
    type,
  } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoggedin: true,
        userName: action.payload.userName,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedin: false,
        tab: action.payload.tab,
      };

    case VISIBLESCREEN:
      return {
        ...state,
        tab: action.payload.tab,
        gistID: action.payload.gistID,
      };
    case SEARCH:
      return {
        ...state,
        searchValue: action.payload.searchValue,
        tab: action.payload.tab,
      };
    case PROFILEIMG:
      return {
        ...state,
        imgURL: action.payload.imgURL,
      };
    default:
      return state;
  }
};
