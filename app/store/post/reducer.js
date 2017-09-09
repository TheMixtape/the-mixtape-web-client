import { GET_POSTS } from './actionTypes';
import createReducer from '../../utils/redux';

const initialState = {
  posts: [
    {
      title: 'initial post title',
    },
  ],
  fetching: false,
  error: false,
};

const reducers = {
  [`${GET_POSTS}_PENDING`]: state => ({ ...state, fetching: true }),
  [`${GET_POSTS}_FULFILLED`]: (state, action) => ({ ...state, fetching: false, posts: action.payload }),
  [`${GET_POSTS}_PENDING`]: (state, action) => ({ ...state, fetching: false, error: action.payload }),
};

export default createReducer(reducers, initialState);
