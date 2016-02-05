'use strict';

import React from 'react';
import Immutable from 'immutable';
import {Paper} from 'material-ui';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Message from './Message';

const Styles = {
  Root: {
    padding: '0px 24px',
    flexGrow: 1,
    overflowY: 'auto'
  }
};

export default React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    messages: React.PropTypes.instanceOf(Immutable.List).isRequired
  },

  renderMessages() {
    return this.props.messages.map((message) =>
      <Message
        key={message.get('id')}
        text={message.get('body')} />
    ).toJS();
  },

  render() {
    return (
      <Paper style={Styles.Root}>
        {this.renderMessages()}
      </Paper>
    );
  }

});
