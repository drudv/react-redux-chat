'use strict';

import moment from 'moment';
import uuid from 'uuid';

export default function composeMessage({body, user, channel}) {
  return {
    id: uuid.v1(),
    body,
    user,
    channel,
    created: moment().format()
  };
}
