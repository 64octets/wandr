'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';

class Journey extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return ( 
    <View>
      <Text>Journey</Text>
    </View>
    );
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(Journey);