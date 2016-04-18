import React, {
  AppRegistry,
  Component,
} from 'react-native';

const BarcampApp = require('./src/BarcampApp');

class barcamp extends Component {
  render() {
    return (
      <BarcampApp>
      </BarcampApp>
    );
  }
}

AppRegistry.registerComponent('barcamp', () => barcamp);
