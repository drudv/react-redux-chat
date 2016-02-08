'use strict';

import Immutable from 'immutable';
import composeMessage from '../utils/composeMessage';
import moment from 'moment';

export default function prepopulate(state) {
  const users = [
    'John Doe', 'James Smith', 'Jack Johnson',
    'Richard Roe', 'Jane Wade', 'Mary Bloggs'
  ].map((name, id) => ({id, name}));

  const channels = [
    'channel 1', 'channel 2', 'channel 3', 'channel 4'
  ].map((name, id) => ({id, name}));

  let from = moment('2016-02-03T14:03:02.782Z');
  const messages = Array(1000).map(
    (_, i) => composeMessage({
      channel: channels[i % channels.length].id,
      user: users[i % users.length].id,
      body: `Message ${i}`,
      created: from.clone().add(5 * i, 'minutes')
    })
  );

  return state.withMutations((state) => {
    state.set('users', Immutable.fromJS(users));
    state.set('channels', Immutable.fromJS(channels));
    state.set('messages', Immutable.fromJS(messages));
    state.set('user', users[0].id);
    state.set('activeChannel', channels[0].id);
  });
}
