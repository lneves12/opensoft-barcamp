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
        this.fetchPreviewFromRemote(this.props.videoId);
    },  
    
    componentWillReceiveProps(nextProps) {
        if(this.props.videoId !== nextProps.videoId) {
            this.setState({
                videoPreviewImageUrl: null
            }) 
            this.fetchPreviewFromRemote(nextProps.videoId);
        }      
    },
    
    fetchPreviewFromRemote(videoId) {
        fetch(`http://www.vimeo.com/api/v2/video/${videoId}.json`, {
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
                                    {this.props.children}  
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
      paddingTop: 26,
      alignItems: 'center',
      justifyContent: 'flex-start'
  },
  playIcon: {
      height: 60,
      width: 60,
      opacity: 0.5
  }
}); 

module.exports = ExternalVideo;