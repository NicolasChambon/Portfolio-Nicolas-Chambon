import { TOOGLE_LANGUAGE } from '../actions/globalActions';

export const initialState = {
  language: { messages: '' },
};

const globalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOOGLE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
};

export default globalReducer;
