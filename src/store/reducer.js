'use strict';

import {ActionTypes, Actions} from './actions';
import Defaults from './defaults';

export default function(state = Defaults.DEFAULT_STATE, action) {
  switch (action.type) {
  case ActionTypes.ACTIVATE_CHANNEL:
    return Actions.setActiveChannel(state, action.payload.channel);
  case ActionTypes.SEND_MESSAGE:
    return Actions.sendMessage(state, action.payload.message);
  }
  return state;
}
