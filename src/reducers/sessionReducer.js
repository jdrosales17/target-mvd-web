import { SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAIL } from '../actions/actionTypes';

const initialState = {
  user: {},
  isLoading: false,
  isAuthenticated: false,
  errors: [],
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGN_IN_SUCCESS: {
      const user = { ...action.user };
      return {
        ...state,
        user,
        isLoading: false,
        isAuthenticated: true,
      };
    }
    case SIGN_IN_FAIL: {
      const errors = [...action.errors];
      return {
        ...state,
        isLoading: false,
        errors,
      };
    }
    default:
      return state;
  }
};

export default sessionReducer;
