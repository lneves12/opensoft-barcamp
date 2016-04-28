'use strict';

const React = require('react');

const  {
    View,
    Text,
    StyleSheet
} = require('react-native');

const BarcampColors = require('./../common/BarcampColors');

class Credits extends React.Component {
    
    render() {
       
        return(
            <View style={styles.container}>
                <Text>
                    Listing the bosses here!!!
                </Text>
                <Text>
                    Organisers!!
                </Text>
                <Text>
                    The Elite Speakers!!
                </Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
  },
  text: {
      fontSize: 20
  }
});

module.exports = Credits;
    
 