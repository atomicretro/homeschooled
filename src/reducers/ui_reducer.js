import { RESIZE_NAVBAR } from '../actions/ui_actions';

const defaultState = {
  navbarSize: 'large'
};

const UIReducer = (state=defaultState, action) => {
  switch (action.type) {
    case RESIZE_NAVBAR:
      return {
        ...state,
        navbarSize: action.size
      };
    default:
      return state;
  }
}

export default UIReducer;
