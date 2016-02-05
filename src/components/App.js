'use strict';

require('normalize.css');
require('styles/App.css');

import React from 'react';
import {AppBar} from 'material-ui';
import ChatContainer from './ChatContainer';

const Styles = {
  Root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  Header: {
    flex: 'none'
  }
};

export default React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div style={Styles.Root}>
        <div style={Styles.Header}>
          <AppBar title={this.props.title} />
        </div>
        <ChatContainer />
      </div>
    );
  }
});
