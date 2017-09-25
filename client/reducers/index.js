import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './post_reducer';

const rootReducer = combineReducers({
  blogs: PostReducer,
  form: formReducer,
});

export default rootReducer;
