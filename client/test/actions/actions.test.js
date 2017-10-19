import thunk from 'redux-thunk';
import moxios from 'moxios';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import * as actionType from '../../actions/ActionTypes';
import * as action from '../../actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('fetches all blogs with fetch_blogs action', () => {
    const store = mockStore({});
    const mockResult = { data: { id: 1, foo: 'bar' } };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockResult,
      });
    });

    return store.dispatch(action.fetchBlogs()).then(() => {
      // console.log(store.getActions(), 'actions got called');
      expect(store.getActions()[0].type).to.equal(actionType.FETCH_BLOGS);
      expect(store.getActions()[0].payload.data).to.eql(mockResult);
    });
  });
});
