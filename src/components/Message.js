'use strict';

import React from 'react';
import Immutable from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    text: React.PropTypes.string.isRequired,
    user: React.PropTypes.instanceOf(Immutable.Map).isRequired,
    created: React.PropTypes.string.isRequired
  },

  render() {
    let {text, user, created, ...props} = this.props;
    let name = user.get('name');
    return (
      <p {...props}>
        {created} {name}: {text}
      </p>
    );
  }

});
