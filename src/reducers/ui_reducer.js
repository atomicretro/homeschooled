import {
  SET_HEADER,
  EMBIGGEN_NAVBAR,
  DIMINISH_NAVBAR,
} from '../actions/ui_actions';

const defaultState = {
  navbarLarge: true
};

const UIReducer = (state=defaultState, action) => {
  switch (action.type) {
    case SET_HEADER:
      return {
        ...state,
        header: action.payload
      }
    case EMBIGGEN_NAVBAR:
      return {
        ...state,
        navbarLarge: true,
      };
    case DIMINISH_NAVBAR:
      return {
        ...state,
        navbarLarge: false,
      };
    default:
      return state;
  }
}

export default UIReducer;
