import thunk from 'redux-thunk';
import { expect } from 'chai';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as actionsType from '../../actions/ActionTypes';
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

  it('calls the correct actions', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { message: 'success', status: '200' },
      });
    });

    const store = mockStore({});
    return store.dispatch(action.fetchBlogs()).then(() => {
      // console.log(store.getActions());
      expect(store.getActions()[0].type).to.equal(actionsType.FETCH_BLOGS);
      expect(store.getActions()[0].payload.data).to.eql({ message: 'success', status: '200' });
    });
  });
});
