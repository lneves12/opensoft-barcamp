import React, {
  AppRegistry,
  Component,
} from 'react-native';

const BarcampApp = require('./src/barcamp-app');

class barcamp extends Component {
  render() {
    return (
      <BarcampApp>
      </BarcampApp>
    );
  }
}

AppRegistry.registerComponent('barcamp', () => barcamp);
