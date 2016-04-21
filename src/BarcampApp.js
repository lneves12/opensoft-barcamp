const React = require('react');

const  {
    View,
    Text,
    DrawerLayoutAndroid,
    StatusBar,
    WebView,
    StyleSheet,
    Dimensions
} = require('react-native');

var {height, width} = Dimensions.get('window')


const leftMenuApi = require('./LeftMenuAndroid/leftMenuApi');

const LeftMenu = require('./LeftMenuAndroid/LeftMenu');
const BarcampHeader = require('./common/BarcampHeader');

var BarcampApp = React.createClass({

    getInitialState(){
        return this.state = {
            w:width,
            h:height
        }
    },

    render() {
        
        const navigationView = (
            <LeftMenu style={styles.container}> </LeftMenu>
        );
        
        const handleDrawerInit = (drawer) => {
            leftMenuApi.init(drawer)
        }; 
        
        // source={{uri: 'https://player.vimeo.com/video/128780049?title=0&byline=0&badge=0&portrait=0'}}
        // source={{html: '<iframe src="https://player.vimeo.com/video/128780049?title=0&byline=0&badge=0&portrait=0" width="{asd}" height="{asd}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'}}
        var videoHeight= this.state.h - 81; 
        
        return(   
            <View style={styles.container} onLayout={this.handleChangeLayout}> 
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
                        <WebView
                            style={{flex: 1}}
                            javaScriptEnabled={true}
                            source={{html: '<style> html, body {border: 0px;margin: 0px;padding: 0px;} </style> <iframe src="https://player.vimeo.com/video/128780049?title=0&byline=0&badge=0&portrait=0" width="' + this.state.w +'" height=' + videoHeight + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'}}  
                        />
                </DrawerLayoutAndroid>
            </View>
        )
    },
    
    handleChangeLayout(event){
        var {x, y, width, height} = event.nativeEvent.layout;
        this.setState({
            w:width,
            h:height
        })
    }
 
    
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = BarcampApp;