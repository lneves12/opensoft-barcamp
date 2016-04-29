const React = require('react');

const  {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ProgressBarAndroid
} = require('react-native');

const BarcampPhotoFullView = require('./BarcampPhotoFullView');

const BarcampPhoto = React.createClass({

    onImagePress() {
        this.props.navigator.push({component: BarcampPhotoFullView, imageUri: this.props.imageUri});
    },


    render() {

        return(       
            <TouchableOpacity 
                style={styles.container}
                onPress={this.onImagePress}>
                <Image
                    style={styles.container}
                    source={{ uri: this.props.imageUri }}>
                    {this.props.children}    
                </Image>
            </TouchableOpacity>
        )
    },

    
    
 
    
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    margin: 1
  }
}); 

module.exports = BarcampPhoto;