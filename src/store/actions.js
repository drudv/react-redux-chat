'use strict';

import Immutable from 'immutable';

export const ActionTypes = {
  DUMMY: 'DUMMY',
  ACTIVATE_CHANNEL: 'ACTIVATE_CHANNEL',
  SEND_MESSAGE: 'SEND_MESSAGE'
};

export const Actions = {

  dummyAction(state) {
    return state;
  },

  setActiveChannel(state, activeChannel) {
    return state.set('activeChannel', activeChannel);
  },

  sendMessage(state, message) {
    return state.set('messages',
      state.get('messages')
        .push(Immutable.fromJS(message))
    );
  }
};

export const ActionCreators = {

  dummyAction() {
    return {
      type: ActionTypes.DUMMY
    };
  },

  setActiveChannel(channel) {
    return {
      type: ActionTypes.ACTIVATE_CHANNEL,
      payload: {
        channel: channel
      }
    };
  },

  sendMessage(message) {
    return {
      type: ActionTypes.SEND_MESSAGE,
      payload: {
        message: message
      }
    };
  }
};
