'use strict';

import moment from 'moment';
import uuid from 'uuid';

export default function composeMessage({id, body, user, channel, created}) {
  return {
    id: id || uuid.v1(),
    body,
    user,
    channel,
    created: moment(created).format()
  };
}
