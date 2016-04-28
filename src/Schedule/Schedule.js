'use strict';

const React = require('react');

const  {
    View,
    Text,
    StyleSheet
} = require('react-native');

const BarcampColors = require('./../common/BarcampColors');
const ExternalVideo = require('./../common/video/ExternalVideo');

class Schedule extends React.Component {
    
    render() {
       
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Resumo
                </Text>
                
                <View style={{flex: 1, marginLeft: 25, marginRight: 25}}>
                    <ExternalVideo 
                        videoId='128780049'
                        navigator={this.props.navigator} />
                </View>
                
                <View style={{flex: 1}}>
                    <Text style={styles.title}>
                        Meter lista de apresentações aqui..
                    </Text>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
  },
  title: {
      color: '#1b80a0',
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 25,
      marginTop: 20,
      marginBottom: 10
  }
});

module.exports = Schedule;
    
 