import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// use similar to axios
import moxios from 'moxios';
import * as actions from '../../actions/index';
import * as types from '../../actions/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('fetch blogs', () => {
    it('should fetch all the blogs', () => {

      const store = mockStore({});
      const test = store.dispatch(actions.fetchBlogs());
      console.log(test);
      // return store.dispatch(actions.fetchBlogs())
      //   .then(() => {
      //     // expect(store.getActions()).toEqual({});
      //     expect(types.FETCH_BLOGS).toEqual('fetch_blogs');
      //   });
    });

    it('should fetch a blog', () => {
      expect(types.FETCH_BLOG).toEqual('fetch_blog');
    });
  });
  // test action fetch_blogs

  // test action fetch_blog

  // test action fetch_comment
  //
});
