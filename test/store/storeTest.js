/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';
import makeStore from 'store/makeStore';
import {ActionCreators} from 'store/actions';
import defaults from 'store/defaults';
import composeMessage from 'utils/composeMessage';

describe('store', () => {

  it('is a Redux store with the correct reducer', () => {
    const store = makeStore();
    let expectedState = Immutable.fromJS(defaults.DEFAULT_STATE);
    let state = store.getState();
    expect(Immutable.is(state, expectedState)).to.be.true;

    const message = composeMessage({
      channel: 1,
      user: 1,
      body: 'message',
    });
    store.dispatch(ActionCreators.sendMessage(message));
    state = store.getState();
    expectedState = expectedState.set('messages',
      expectedState.get('messages')
        .push(Immutable.fromJS(message))
    );
    expect(Immutable.is(state, expectedState)).to.be.true;
  });

});
