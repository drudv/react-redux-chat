'use strict';

import makeUserFinder from './makeUserFinder';

export default function makeMessageReducer(activeChannel, users) {
  let findUser = makeUserFinder(users);
  return (result, message) => {
    if (message.get('channel') !== activeChannel) {
      return result;
    }
    return result.push(
      message.set('user', findUser(message.get('user')))
    );
  }
}
