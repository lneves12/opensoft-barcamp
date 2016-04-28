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

const FullVideo = require('./FullVideo');

const ExternalVideo = React.createClass({

    getInitialState() {
        return {};
    },

    componentWillMount() {
        fetch(`http://www.vimeo.com/api/v2/video/${this.props.videoId}.json`, {
            method: 'get'
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            this.setState({
                videoPreviewImageUrl: jsonResponse[0].thumbnail_large
            }) 
        }).catch((err) => {
            console.log('why!! -' + err)
        });
    },  
 
    hasEnoughData() {
      return this.state.videoPreviewImageUrl;  
    },   
    
    onVideoPreviewPress() {
        this.props.navigator.push({component: FullVideo, videoId: this.props.videoId});
    },

    render() {
                   
        let renderPreviewImage = () => {
            if(this.hasEnoughData()){
                return( 
                    <TouchableOpacity 
                        style={styles.container}
                        onPress={this.onVideoPreviewPress}>
                            <Image
                                style={styles.previewImage}
                                source={{uri: this.state.videoPreviewImageUrl}}>
                                    <Image
                                        style={styles.playIcon}
                                        source={require('./img/playIcon.png')}/>
                            </Image> 
                    </TouchableOpacity> 
                )
            } else {
                return (
                    <ProgressBarAndroid />
                ) 
            }     
        }
        
        return(   
            <View style={styles.container}>                  
                {renderPreviewImage()} 
            </View> 
        )
    },

    
    
 
    
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  previewImage: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  playIcon: {
      height: 100,
      width: 100,
      opacity: 0.5
  }
}); 

module.exports = ExternalVideo;