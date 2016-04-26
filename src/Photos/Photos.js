'use strict';

const React = require('react');

const  {
    View,
    Text,
    StyleSheet
} = require('react-native');

const BarcampColors = require('./../common/BarcampColors');
const ExternalVideo = require('./../common/video/ExternalVideo');

class Photos extends React.Component {
    
    render() {
       
        return(
            <ExternalVideo videoId='130081631'
                           navigator={this.props.navigator}/>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
        flex: 1
  }
});

module.exports = Photos;
    
 