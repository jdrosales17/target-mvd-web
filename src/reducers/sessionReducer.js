import {
  SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAIL,
  SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAIL,
} from '../actions/actionTypes';

const initialState = {
  user: {},
  isLoading: false,
  authHeaders: {},
  errors: [],
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_START:
    case SIGN_UP_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGN_IN_SUCCESS: {
      const { headers, user } = action;
      return {
        ...state,
        user,
        isLoading: false,
        authHeaders: headers,
        errors: [],
      };
    }
    case SIGN_IN_FAIL:
    case SIGN_UP_FAIL: {
      const errors = [...action.errors];
      return {
        ...state,
        isLoading: false,
        errors,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errors: [],
      };
    }
    default:
      return state;
  }
};

export default sessionReducer;
