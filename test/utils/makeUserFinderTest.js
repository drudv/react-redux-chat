/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';
import makeUserFinder from 'utils/makeUserFinder';

describe('makeUserFinder', () => {

  it('produces a correct user-finding function', () => {
    const users = Immutable.fromJS([
      {id: 1, name: 'John Doe'},
      {id: 2, name: 'Richard Roe'},
      {id: 3, name: 'Jane Smith'}
    ]);
    const findUser = makeUserFinder(users);
    const requiredUser = 2;
    const expectedResult = Immutable.fromJS({
      id: 2,
      name: 'Richard Roe'
    });
    const result = findUser(requiredUser);
    expect(Immutable.is(result, expectedResult)).to.be.true;
  })

});
