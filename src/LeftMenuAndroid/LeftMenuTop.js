'use strict';

const React = require('react');

const  {
    View,
    Text,
    StyleSheet,
    Image
} = require('react-native');

let LeftMenuTop = React.createClass({
    
    render() {
       
        return(
            <Image style={styles.backgroundImage} 
                   source={this.props.selectedBarcamp.coverPhoto}>
                    <Image style={styles.profileImage} 
                           source={require('./img/profile.jpg')}>
                    </Image>
                    <Text style={styles.name}>
                        LUIS NEVES
                    </Text>
            </Image>
        )
    }
    
});

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    width: undefined,
    height: undefined
  },
  profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
  },
});

module.exports = LeftMenuTop;
    
 