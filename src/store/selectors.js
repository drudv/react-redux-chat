'use strict';

import Immutable from 'immutable';
import {createSelector} from 'reselect';
import makeMessageReducer from '../utils/makeMessageReducer';

const activeChannelSelector = (state) => state.get('activeChannel');
const channelsSelector = (state) => state.get('channels');
const messagesSelector = (state) => state.get('messages');
const userSelector = (state) => state.get('user');
const rawUsersSelector = (state) => state.get('users');

export const usersSelector = createSelector(
  userSelector,
  rawUsersSelector,
  (currentUserId, users) =>
    users.map(
      (user) =>
        user.set('self', currentUserId == user.get('id'))
    )
);

export const currentChannelSelector = createSelector(
  activeChannelSelector,
  channelsSelector,
  (activeChannel, channels) =>
    channels.find(
      (channel) =>
        channel.get('id') == activeChannel
    )
);

export const currentMessagesSelector = createSelector(
  activeChannelSelector,
  usersSelector,
  messagesSelector,
  (activeChannel, users, messages) => {
    return messages.reduce(
      makeMessageReducer(activeChannel, users),
      Immutable.List()
    )
  }
);

export const currentUserSelector = createSelector(
  usersSelector,
  userSelector,
  (users, userId) =>
    users.find(
      (user) =>
        user.get('id') == userId
    )
);

export const resultSelector = createSelector(
  channelsSelector,
  currentChannelSelector,
  currentMessagesSelector,
  usersSelector,
  currentUserSelector,
  (channels, currentChannel, currentMessages, users, currentUser) => ({
    channels,
    currentChannel,
    currentMessages,
    users,
    currentUser
  })
);
