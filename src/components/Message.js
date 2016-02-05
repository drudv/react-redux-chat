'use strict';

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render() {
    let {text, ...props} = this.props;
    return (
      <p {...props}>
        {text}
      </p>
    );
  }

});
