const React = require('react');

const  {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} = require('react-native');

const ImageZoom = require('react-native-image-zoom').default;

var BarcampPhotoFullView = React.createClass({
    
    onImagePress() {
        this.props.navigator.pop();
    },
    
    render() {
        return(
            <ImageZoom
                style={styles.container}
                resizeMode={Image.resizeMode.contain}
                source={{ uri: this.props.route.imageUri }} />
        )
    }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
}); 

module.exports = BarcampPhotoFullView;