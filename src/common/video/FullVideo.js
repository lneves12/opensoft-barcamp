const React = require('react');

const  {
    View,
    Text,
    WebView,
    Image,
    StyleSheet,
    TouchableOpacity,
    ProgressBarAndroid,
    Dimensions
} = require('react-native');

let {height, width} = Dimensions.get('window');

var FullVideo = React.createClass({
    
    //Repor depois disto: https://github.com/facebook/react-native/issues/7226 
    // source={{uri: `https://player.vimeo.com/video/${this.props.route.videoId}?title=0&byline=0&badge=0&portrait=0&autoplay=1`}}/>
    
    render() {
        return(
            <WebView
                style={styles.container}
                javaScriptEnabled={true}
                automaticallyAdjustContentInsets={true}
                source={{ html: `<html><body style='margin:0;padding:0;'>
                                    <iframe src="https://player.vimeo.com/video/${this.props.route.videoId}?title=0&byline=0&badge=0&portrait=0" 
                                            width="${width}" height="${height}" frameborder="0" 
                                            webkitallowfullscreen mozallowfullscreen allowfullscreen>
                                    </iframe>` }} />

        )
    }

});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}); 

module.exports = FullVideo;