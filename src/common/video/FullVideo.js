const React = require('react');

const  {
    View,
    Text,
    WebView,
    Image,
    StyleSheet,
    TouchableOpacity,
    ProgressBarAndroid
} = require('react-native');

var ExternalVideo = React.createClass({
    
    render() {
        return(
            <WebView
                style={styles.container}
                javaScriptEnabled={true}
                source={{uri: `https://player.vimeo.com/video/${this.props.route.videoId}?title=0&byline=0&badge=0&portrait=0&autoplay=1`}}/>
        )
    }

});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}); 

module.exports = ExternalVideo;