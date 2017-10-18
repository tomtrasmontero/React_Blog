import axios from 'axios';
import * as actions from './ActionTypes';

export const fetchBlogs = () => {
  const request = axios.get('/api/blogs');

  return (dispatch) => {
    const action = request
      .then((result) => {
        dispatch({
          type: actions.FETCH_BLOGS,
          payload: result,
        });
      });

    return action;
  };
};

export const fetchBlog = (id) => {
  const request = axios.get(`/api/blog/${id}`);

  return (dispatch) => {
    request
      .then((result) => {
        dispatch({
          type: actions.FETCH_BLOG,
          payload: result,
        });
      });
  };
};

export const createComment = (data) => {
  const request = axios.post('/api/blog/comment', data);

  return (dispatch) => {
    request
      .then((result) => {
        dispatch(fetchBlog(result.data.blogId));
      });
  };
};
