/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';
import {isFSA} from 'flux-standard-action';
import reducer from 'store/reducer';
import {ActionCreators} from 'store/actions';
import defaults from 'store/defaults';

describe('actions', () => {

  it('consist of FSA compliant dummy action', () => {
    const action = ActionCreators.dummyAction();
    expect(isFSA(action)).to.be.true;
  });

  it('consist of FSA compliant set active channel action', () => {
    const action = ActionCreators.setActiveChannel(1);
    expect(isFSA(action)).to.be.true;
  });

  it('consist of FSA compliant send message action', () => {
    const action = ActionCreators.sendMessage({
      id: '2f0ebc60-cba7-11e5-8190-cfca21c70119',
      channel: 1,
      user: 1,
      body: 'message1',
      created: '2016-02-03T13:00:00.000Z'
    });
    expect(isFSA(action)).to.be.true;
  });

});
