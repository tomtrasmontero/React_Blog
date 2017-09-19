import axios from 'axios';

export const FETCH_BLOGS = 'fetch_blogs';

const allBlogsData = (data) => {
  return {
    type: 'FETCH_BLOGS',
    payload: data,
  };
};

export const fetchBlogs = () => {
  const request = axios.get('/api/blogs');

  return (dispatch) => {
    return request
      .then((result) => {
        console.log(result.data);
        dispatch(allBlogsData(result.data));
      });
  };

  // return {
  //   type: FETCH_BLOGS,
  //   payload: request,
  // };
};
