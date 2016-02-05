'use strict';

import {createSelector} from 'reselect';

const activeChannelSelector = (state) => state.get('activeChannel');
const channelsSelector = (state) => state.get('channels');
const messagesSelector = (state) => state.get('messages');
const userSelector = (state) => state.get('user');
const usersSelector = (state) => state.get('users');

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
  messagesSelector,
  (activeChannel, messages) =>
    messages.filter(
        (message) =>
          message.get('channel') == activeChannel
    )
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
