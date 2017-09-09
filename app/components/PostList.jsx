import React from 'react';
import PropTypes from 'prop-types';
import fp from 'lodash/fp';

const Post = ({ title }) => (
  <div>{title}</div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
};

const PostList = ({ posts, getPost }) => (
  <div>
    <ul>
      {
        fp.map(post => (
          <li key={`${post.title}`}>
            <Post {...post} />
          </li>
        ))(posts)
      }
    </ul>
    <input
      type="submit"
      onClick={getPost}
      value="click"
    />
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
  getPost: PropTypes.func.isRequired,
};

export default PostList;
