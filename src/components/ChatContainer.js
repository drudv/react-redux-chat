'use strict';

import {connect} from 'react-redux';
import Chat from './Chat';
import {ActionCreators} from '../store/actions';
import {resultSelector} from '../store/selectors';

export default connect(
  resultSelector,
  ActionCreators
)(Chat);
