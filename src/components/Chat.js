'use strict';

import React from 'react';
import {LeftNav, MenuItem, CircularProgress} from 'material-ui';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Immutable from 'immutable';
import NewMessageField from './NewMessageField';
import Discussion from './Discussion';
import composeMessage from '../utils/composeMessage';

const Styles = {
  Root: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    overflowY: 'hidden'
  },
  Content: {
    flexGrow: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  Sidebar: {
    display: 'flex',
    position: 'relative',
    flexBasis: 300
  },
  LeftNav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: undefined
  }
};

export default React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    users: React.PropTypes.instanceOf(Immutable.List).isRequired,
    channels: React.PropTypes.instanceOf(Immutable.List).isRequired,
    currentMessages: React.PropTypes.instanceOf(Immutable.List).isRequired,
    currentChannel: React.PropTypes.instanceOf(Immutable.Map),
    currentUser: React.PropTypes.instanceOf(Immutable.Map),
    setActiveChannel: React.PropTypes.func.isRequired,
    sendMessage: React.PropTypes.func.isRequired
  },

  renderChannels() {
    let {channels, currentChannel} = this.props;
    let activeChannel = currentChannel.get('id');
    return channels.map((channel) => {
      let id = channel.get('id');
      return (
        <MenuItem
          key={id}
          value={id}
          selected={id == activeChannel}
          onTouchTap={() => this.props.setActiveChannel(id)}
          primaryText={channel.get('name')} />
      );
    }).toJS();
  },

  onSendMessage(body) {
    let {currentUser, currentChannel} = this.props;
    this.props.sendMessage(composeMessage({
      body,
      user: currentUser.get('id'),
      channel: currentChannel.get('id')
    }));
  },

  render() {
    let {currentUser, currentChannel} = this.props;
    if (!currentUser || !currentChannel) {
      return (
        <CircularProgress />
      );
    }
    return (
      <div style={Styles.Root}>
        <div style={Styles.Sidebar}>
          <LeftNav
            style={Styles.LeftNav}>
            {this.renderChannels()}
          </LeftNav>
        </div>
        <div style={Styles.Content}>
          <Discussion
            users={this.props.users}
            messages={this.props.currentMessages} />
          <NewMessageField
            onSendMessage={this.onSendMessage} />
        </div>
      </div>
    );
  }
});
