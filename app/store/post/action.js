import fp from 'lodash/fp';
import axios from 'axios';
import {
  GET_POSTS,
} from './actionTypes';

/* eslint-disable import/prefer-default-export */

export const getDummyPosts = () => (dispatch) => {
  const dummyPostsUrl = 'http://jsonplaceholder.typicode.com/posts';

  dispatch({
    type: GET_POSTS,
    payload: axios.get(dummyPostsUrl).then(fp.get('data')),
  });
};
