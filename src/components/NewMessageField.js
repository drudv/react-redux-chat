'use strict';

import React from 'react';
import {TextField, RaisedButton, Toolbar, ToolbarGroup} from 'material-ui';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Styles = {
  Root: {
    display: 'flex',
    boxSizing: 'border-box'
  },
  ToolbarGroup: {
    display: 'flex',
    flexGrow: 1
  },
  TextField: {
    flexGrow: 1
  }
};

export default React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    onSendMessage: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      messageText: ''
    };
  },

  onChange(e) {
    this.setState({
      messageText: e.target.value
    });
  },

  sendMessage() {
    this.props.onSendMessage(this.state.messageText);
    this.setState({messageText: ''});
  },

  render() {
    let messageText = this.state.messageText;
    return (
      <Toolbar style={Styles.Root}>
        <ToolbarGroup
          lastChild={true}
          style={Styles.ToolbarGroup}>
          <TextField
            hintText="Type your message here"
            value={messageText}
            onChange={this.onChange}
            style={Styles.TextField} />
          <RaisedButton
            primary={true}
            disabled={!messageText}
            onTouchTap={this.sendMessage}
            label="SEND" />
        </ToolbarGroup>
      </Toolbar>
    );
  }

});
