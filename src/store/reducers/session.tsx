import { Reducer } from 'redux';
import * as types from '../actions/actionType';

const initialState: any = {
  list: [],
  contact: [],
  filterList: [],
  // error: null,
};

const session: any = (state = initialState, action: any) => {
  switch (action.type) {
    case types.FILL_ADDRESS_LIST:
      return { ...state, list: [...action.payload] };
    case types.CHANGED_FILTER_LIST:
      return { ...state, filterList: [...action.payload] };
    default:
      return state;
  }
};

export default session;
