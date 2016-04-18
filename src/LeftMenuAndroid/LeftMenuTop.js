'use strict';

const React = require('react-native');

const  {
    View,
    Text,
    StyleSheet,
    Image
} = React;

class LeftMenuTop extends React.Component {
    
    render() {
       
        return(
            <Image style={styles.backgroundImage} 
                   source={require('./img/ponte_Fotor.jpg')}>
                    <Image style={styles.profileImage} 
                           source={require('./img/profile.jpg')}>
                    </Image>
                    <Text style={styles.name}>
                        LUIS NEVES
                    </Text>
            </Image>
        )
    }
    
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
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
    
 