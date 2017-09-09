import React from 'react';
import { Provider, connect } from 'react-redux';
import store from '../store/store';
import PostList from '../components/PostList';
import { getDummyPosts } from '../store/post/action';
import { getPosts } from '../store/post/selectors';

const ConnectedPostList = connect(
  state => ({
    posts: getPosts(state),
  }),
  {
    getPost: getDummyPosts,
  },
)(PostList);

export default () => (
  <Provider store={store} >
    <ConnectedPostList />
  </Provider>
);
