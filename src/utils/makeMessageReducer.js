'use strict';

import makeUserFinder from './makeUserFinder';
import moment from 'moment';

export default function makeMessageReducer(activeChannel, users) {
  let findUser = makeUserFinder(users);
  return (result, message) => {
    if (message.get('channel') !== activeChannel) {
      return result;
    }
    return result.push(
      message.withMutations(message => {
        let created = moment(message.get('created'));
        let previous = result.last();
        if (!previous || !created.isSame(previous.get('created'), 'day')) {
          message.set('date', created.format('MMMM Do, YYYY'));
        }
        message.set('time', created.format('LT'));
        message.set('user', findUser(message.get('user')));
      })
    );
  }
}
