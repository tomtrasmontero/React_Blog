import axios from 'axios';

export const FETCH_BLOGS = 'fetch_blogs';
export const FETCH_BLOG = 'fetch_blog';

export const fetchBlogs = () => {
  const request = axios.get('/api/blogs');

  return (dispatch) => {
    request
      .then((result) => {
        dispatch({
          type: FETCH_BLOGS,
          payload: result,
        });
      });
  };
};

export const fetchBlog = (id) => {
  const request = axios.get(`/api/blog/${id}`);

  return (dispatch) => {
    request
      .then((result) => {
        dispatch({
          type: FETCH_BLOG,
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
