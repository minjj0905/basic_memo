import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import memo from './memo';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        memo,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
