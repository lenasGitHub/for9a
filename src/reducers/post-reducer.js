import {
  FETCH_RENTAL_BY_ID_SCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_SCCESS
} from "../actions/types";
const INITIAL_STATE = {
  items: {
    data: []
  },
  item: {
    data: {}
  }
};

export const postReducer = (state = INITIAL_STATE.items, action) => {
  switch (action.type) {
    case FETCH_RENTAL_SCCESS:
      return { ...state, data: action.items };
    default:
      return state;
  }
};

export const selectedItemReducer = (state = INITIAL_STATE.item, action) => {
  switch (action.type) {
    case FETCH_RENTAL_BY_ID_SCCESS:
      return { ...state, data: action.item };
    case FETCH_RENTAL_BY_ID_INIT:
      return { ...state, data: {} };
    default:
      return state;
  }
};
