import { FETCH_BLOGS } from '../actions/index';

const ROOT_STATE = [];

export default function (state = ROOT_STATE, action) {
  switch (action.type) {
    case FETCH_BLOGS:
      return [...ROOT_STATE, ...action.payload.data];
    default:
      return state;
  }
}
