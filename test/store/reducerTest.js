/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';
import reducer from 'store/reducer';
import {ActionCreators} from 'store/actions';
import defaults from 'store/defaults';

describe('store reducer', () => {

  it('has an initial state', () => {
    const action = ActionCreators.dummyAction();
    const nextState = reducer(undefined, action);
    const expectedState = Immutable.fromJS(defaults.DEFAULT_STATE);
    expect(Immutable.is(nextState, expectedState)).to.be.true;
  });

  it('sets active channel', () => {
    const initialState = Immutable.fromJS({
      channels: [
        {id: 1, name: 'channel 1'},
        {id: 2, name: 'channel 2'}
      ],
      activeChannel: 1
    });
    const action = ActionCreators.setActiveChannel(2);
    const nextState = reducer(initialState, action);
    const expectedState = Immutable.fromJS({
      channels: [
        {id: 1, name: 'channel 1'},
        {id: 2, name: 'channel 2'}
      ],
      activeChannel: 2
    });
    expect(Immutable.is(nextState, expectedState)).to.be.true;
  });

  it('appends a new message', () => {
    const initialState = Immutable.fromJS({
      messages: [
        {
          id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
          channel: 1,
          user: 1,
          body: 'message1',
          created: '2016-02-03T12:00:00.000Z'
        },
      ]
    });
    const action = ActionCreators.sendMessage({
      id: '2f0ebc60-cba7-11e5-8190-cfca21c70119',
      channel: 2,
      user: 2,
      body: 'message2',
      created: '2016-02-03T13:00:00.000Z'
    });
    const nextState = reducer(initialState, action);
    const expectedState = Immutable.fromJS({
      messages: [
        {
          id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
          channel: 1,
          user: 1,
          body: 'message1',
          created: '2016-02-03T12:00:00.000Z'
        },
        {
          id: '2f0ebc60-cba7-11e5-8190-cfca21c70119',
          channel: 2,
          user: 2,
          body: 'message2',
          created: '2016-02-03T13:00:00.000Z'
        }
      ]
    });
    expect(Immutable.is(nextState, expectedState)).to.be.true;
  });

});
