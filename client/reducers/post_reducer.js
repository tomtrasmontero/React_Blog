import { FETCH_BLOGS, FETCH_BLOG, CREATE_COMMENT } from '../actions/ActionTypes';

const ROOT_STATE = [];

const updateBlog = (arr, id) => {
  const newState = arr.filter(item => item.id !== id);
  return newState;
};

export default function (state = ROOT_STATE, action) {
  switch (action.type) {
    case FETCH_BLOG: {
      const { id } = action.payload.data;
      updateBlog(ROOT_STATE, id);
      return [...ROOT_STATE, ...action.payload.data];
    }
    case FETCH_BLOGS:
      return [...ROOT_STATE, ...action.payload.data];
    case CREATE_COMMENT:
      return [...ROOT_STATE, ...action.payload.data];
    default:
      return state;
  }
}
