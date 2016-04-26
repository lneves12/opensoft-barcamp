import React from 'react';

import {
  Navigator,
  AppRegistry
} from 'react-native';

const BarcampApp = require('./src/BarcampApp');

class barcamp extends React.Component {
  render() {
    return (
      <BarcampApp sceneTransition={Navigator.SceneConfigs.FadeAndroid} />
    );
  }
}

AppRegistry.registerComponent('barcamp', () => barcamp);
