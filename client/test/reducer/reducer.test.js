import { expect } from 'chai';
import reducer from '../../reducers/post_reducer';
import * as actionTypes from '../../actions/ActionTypes';


describe('post reducers', () => {
  it('return initial state', () => {
    const testData = { type: 'foo' };
    const state = reducer(undefined, testData);
    expect(state).to.eql([]);
  });

  it('fetch a blog', () => {
    const testData = { data: [{ id: 1, blog: 'bar' }] };
    const action = {
      type: actionTypes.FETCH_BLOG,
      payload: testData,
    };

    const state = reducer([], action);
    expect(state.length).to.equal(1);
    expect(state[0].blog).to.equal('bar');
  });

  it('fetches all the blogs', () => {
    const testData = { data: [
      { id: 1, blog: 'foo' },
      { id: 2, blog: 'bar' },
    ] };
    const action = {
      type: actionTypes.FETCH_BLOGS,
      payload: testData,
    };

    const state = reducer([], action);
    expect(state.length).to.equal(2);
  });
});
