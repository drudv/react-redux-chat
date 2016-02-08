'use strict';

import React from 'react';
import Immutable from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Colors from 'material-ui/lib/styles/colors';

const Styles = {
  Root: { },
  Row: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 10,
    borderBottom: `1px solid ${Colors.grey300}`
  },
  Date: {
    color: Colors.grey500
  },
  Time: {
    flex: '0 1 auto',
    textAlign: 'right',
    color: Colors.grey500
  },
  Name: {
    flex: '0 0 150px',
    color: Colors.grey600,
    fontWeight: 'bold',
    textOverflow: 'ellipsis',
    textAlign: 'right',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    paddingRight: 20
  },
  Text: {
    flex: '1 0 auto'
  },
  Own: {
    backgroundColor: Colors.blueGrey50
  },
  Other: {
    backgroundColor: Colors.grey50
  }
};

export default React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    text: React.PropTypes.string.isRequired,
    user: React.PropTypes.instanceOf(Immutable.Map).isRequired,
    date: React.PropTypes.string,
    time: React.PropTypes.string.isRequired
  },

  render() {
    let {text, user, date, time, ...props} = this.props;
    let name = user.get('name');
    let lineStyle = user.get('self') ? Styles.Own : Styles.Other;
    return (
      <div style={Styles.Root} {...props}>
        {date &&
          <div style={{...Styles.Row, ...Styles.Date}}>
            {date}
          </div>}
        <div style={{...Styles.Row, ...lineStyle}}>
          <div style={Styles.Name}>{name}</div>
          <div style={Styles.Text}>{text}</div>
          <div style={Styles.Time}>{time}</div>
        </div>
      </div>
    );
  }

});
