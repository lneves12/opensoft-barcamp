const React = require('react');

const  {
    View,
    Text,
    DrawerLayoutAndroid,
    StatusBar,
    WebView,
    Image,
    StyleSheet,
    TouchableOpacity,
    ProgressBarAndroid
} = require('react-native');

const leftMenuApi = require('./LeftMenuAndroid/leftMenuApi');

const LeftMenu = require('./LeftMenuAndroid/LeftMenu');
const BarcampHeader = require('./common/BarcampHeader');


var BarcampApp = React.createClass({
  
    getInitialState() {
      return {}
    },
     
    componentWillMount() {
        let videoId = 128780049;
        
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
    
    onVideoPress() {
        this.setState({isVideoOn: true})
    },

    render() {
        
                             
        const handleDrawerInit = (drawer) => {
            leftMenuApi.init(drawer)
        }; 
        
        const navigationView = (
            <LeftMenu style={styles.container}> </LeftMenu>
        );
         
        let renderImage = () => {
            if(this.hasEnoughData()){
                return( 
                    <TouchableOpacity 
                        style={styles.container}
                        onPress={this.onVideoPress}>
                            <Image
                                style={styles.previewImage}
                                source={{uri: this.state.videoPreviewImageUrl}}>
                                    <Image
                                        style={styles.playIcon}
                                        source={require('./playIcon.png')}/>
                            </Image> 
                    </TouchableOpacity> 
                )
            } else {
                return (
                    <ProgressBarAndroid />
                ) 
            }     
        }
          
        if(!this.state.isVideoOn){
            return(   
                <View style={styles.container}> 
                    <StatusBar
                        translucent={true}
                        backgroundColor="rgba(0, 0, 0, 0.2)"
                    />
                    <DrawerLayoutAndroid   
                        ref={(drawer) => handleDrawerInit(drawer)}
                        drawerWidth={300}
                        drawerPosition={DrawerLayoutAndroid.positions.Left}
                        renderNavigationView={() => navigationView}>
                            <BarcampHeader 
                                title='2016 - South Side of Life'
                            />
                            <View style={{flex: 1}}>
                                {renderImage()} 
                            </View> 
                            <View style={{flex: 1}}>
                            </View>  
                    </DrawerLayoutAndroid>
                </View> 
            )
        } else {
            return(
                 <WebView
                    style={{flex: 1}}
                    javaScriptEnabled={true}
                    source={{uri: 'https://player.vimeo.com/video/128780049?title=0&byline=0&badge=0&portrait=0&autoplay=1'}}
                 />
            )
        }
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

module.exports = BarcampApp;