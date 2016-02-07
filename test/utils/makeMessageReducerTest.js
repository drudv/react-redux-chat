/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';
import makeMessageReducer from 'utils/makeMessageReducer';

describe('makeMessageReducer', () => {

  it('produces a correct reducing function', () => {
    const users = Immutable.fromJS([
      {id: 1, name: 'John Doe'},
      {id: 2, name: 'Richard Roe'},
      {id: 3, name: 'Jane Smith'}
    ]);
    const messages = Immutable.fromJS([
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
      },
      {
        id: 'e14d6845-d61c-403f-ab94-ed534c6a3e62',
        channel: 1,
        user: 2,
        body: 'message3',
        created: '2016-02-03T15:00:00.000Z'
      }
    ]);
    const channel = 1;
    const reducer = makeMessageReducer(channel, users);
    const result = messages.reduce(reducer, Immutable.List());
    const expectedResult = Immutable.fromJS([
      {
        id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
        channel: 1,
        user: {
          id: 1,
          name: 'John Doe'
        },
        body: 'message1',
        created: '2016-02-03T12:00:00.000Z'
      },
      {
        id: 'e14d6845-d61c-403f-ab94-ed534c6a3e62',
        channel: 1,
        user: {
          id: 2,
          name: 'Richard Roe'
        },
        body: 'message3',
        created: '2016-02-03T15:00:00.000Z'
      }
    ]);
    expect(Immutable.is(result, expectedResult)).to.be.true;
  })

});
