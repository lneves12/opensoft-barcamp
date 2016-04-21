import React from 'react';

import {
  AppRegistry
} from 'react-native';

const BarcampApp = require('./src/BarcampApp');

class barcamp extends React.Component {
  render() {
    return (
      <BarcampApp>
      </BarcampApp>
    );
  }
}

AppRegistry.registerComponent('barcamp', () => barcamp);
