import { combineReducers } from 'redux';
import PostReducer from './post_reducer';

const rootReducer = combineReducers({
  blogs: PostReducer,
});

export default rootReducer;
