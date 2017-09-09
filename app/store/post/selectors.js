import { createSelector } from 'reselect';
import fp from 'lodash/fp';

const getPostsSubState = fp.get('posts');

export const getPosts = createSelector(
  getPostsSubState,
  fp.get('posts'),
);

export const getFetching = createSelector(
  getPostsSubState,
  fp.get('fetching'),
);

export const getError = createSelector(
  getPostsSubState,
  fp.get('error'),
);
