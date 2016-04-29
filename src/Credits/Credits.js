'use strict';

const React = require('react');

const  {
    View,
    Text,
    Image,
    StyleSheet
} = require('react-native');

const BarcampColors = require('./../common/BarcampColors');
const BarcampPhoto = require('./../common/photo/BarcampPhoto');
const BarcampTitle = require('./../common/BarcampTitle');

class Credits extends React.Component {
    
    render() {
       
        return(
            <View style={styles.container}>
               
                
                 <BarcampTitle text='The organisers...' />
            
                <View style={styles.creditImage}>
                    
                    <BarcampPhoto 
                        imageUri={`http://graph.facebook.com/758208717609782/picture`} 
                        navigator={this.props.navigator}>
                            <Image style={{flex: 1, resizeMode: 'contain', opacity: 0.6, margin: 15}} source={{uri: 'http://img06.deviantart.net/dd6a/i/2013/287/b/0/holy_grail_png_by_erdmute-d1nodd1.png'}} />
                     </BarcampPhoto>
                </View>
                
                <View style={{flex: 1, paddingLeft: 15}}>
                    <Text>
                        Pedro Carvalho
                    </Text>
                    <Text>
                        Mariana Sousa
                    </Text>
                    <Text>
                        Vitor Oliveira
                    </Text>
                </View>
                
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#eeeeee'
  },
  creditImage: {
    flex: 2, 
    marginLeft: 15, 
    marginRight: 15,
    opacity: 0.8
  }
});

module.exports = Credits;
    
 