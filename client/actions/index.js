import axios from 'axios';

export const FETCH_BLOGS = 'fetch_blogs';


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
