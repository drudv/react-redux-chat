'use strict';

import Immutable from 'immutable';

export default {
  DEFAULT_STATE: Immutable.fromJS({
    channels: [],
    activeChannel: null,
    users: [],
    user: null,
    messages: []
  })

/*
  DEFAULT_STATE: Immutable.fromJS({
    channels: [
      {id: 1, name: 'channel 1'},
      {id: 2, name: 'channel 2'},
      {id: 3, name: 'channel 3'},
      {id: 4, name: 'channel 4'}
    ],
    activeChannel: 1,
    users: [
      {id: 1, name: 'Jiri Vopolka'},
      {id: 2, name: 'Vladimir Gorej'},
      {id: 3, name: 'Dmitry Druganov'}
    ],
    user: 3,
    messages: [
      {
        id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
        channel: 1,
        user: 1,
        body: 'message body 1, channel 1',
        created: '2016-02-03T14:03:02.782Z'
      },
      {
        id: 'cd278f50-cb8c-11e5-b5a4-f1075ef8465d',
        channel: 1,
        user: 2,
        body: 'message body 2, channel 1',
        created: '2016-02-03T14:03:02.782Z'
      },
      {
        id: 'fee79d00-cb8c-11e5-b5a4-f1075ef8465d',
        channel: 1,
        user: 1,
        body: 'message body 3, channel 1',
        created: '2016-02-03T14:03:02.782Z'
      },
      {
        id: 'dcfdaae0-cb8c-11e5-b5a4-f1075ef8465d',
        channel: 2,
        user: 2,
        body: 'message body 4, channel 2',
        created: '2016-02-03T14:03:02.782Z'
      },
      {
        id: 'f4f9a6d0-cb8c-11e5-b5a4-f1075ef8465d',
        channel: 2,
        user: 3,
        body: 'message body 5, channel 2',
        created: '2016-02-03T14:03:02.782Z'
      }
    ]
  })
*/

};
