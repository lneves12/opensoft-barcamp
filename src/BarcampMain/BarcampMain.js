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

const ScrollableTabView = require('react-native-scrollable-tab-view');

const LeftMenuApi = require('./../LeftMenuAndroid/LeftMenuApi');
const LeftMenu = require('./../LeftMenuAndroid/LeftMenu');
const BarcampColors = require('./../common/BarcampColors');
const BarcampHeader = require('./../common/BarcampHeader');

const Schedule = require('./../Schedule/Schedule');
const Photos = require('./../Photos/Photos');
const Credits = require('./../Credits/Credits');


// TODO [LN] var customData = require('./customData.json');

const DATA ={
    Freedom : { 
        id: 'Freedom',
        year: '2015',
        title: 'Freedom'
    },
    SouthSide : {
        id: 'SouthSide',
        year: '2016',
        title: 'South Side of Life'
    }
};

var BarcampMain = React.createClass({
    
    getInitialState(){
        return { selectedBarcamp: DATA['Freedom'] };
    },

    onMenuItemPress(menuIdPressed) {
        this.setState( { selectedBarcamp: DATA[menuIdPressed] });
        LeftMenuApi.closeDrawer();
    },

    render() {
                  
        const handleDrawerInit = (drawer) => {
            LeftMenuApi.init(drawer)
        };  
        
        const navigationView = (
            <LeftMenu 
                style={styles.container}
                selectedBarcamp={this.state.selectedBarcamp}
                onMenuItemPress={this.onMenuItemPress} />
        );
         
        const getBarcampFullTitle = () => {
            return `${this.state.selectedBarcamp.year} - ${this.state.selectedBarcamp.title}`;
        };
            
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
                            title={getBarcampFullTitle()}
                        />
                        <View style={{flex: 1}}>
                            <ScrollableTabView
                                tabBarBackgroundColor = {BarcampColors.backgroundDarkColor}
                                tabBarUnderlineColor = {BarcampColors.backgroundLighColor}
                                tabBarActiveTextColor = {BarcampColors.tabsTextActive}
                                tabBarInactiveTextColor = {BarcampColors.tabsTextpassive}>
                                
                                <Schedule
                                    navigator={this.props.navigator}
                                    tabLabel='Schedule' />
                                
                                <Photos 
                                    navigator={this.props.navigator}  
                                    tabLabel='Photos' />
                                    
                                <Credits
                                    navigator={this.props.navigator}  
                                    tabLabel='Credits'/>
                            
                            </ScrollableTabView>
                        </View>  
                </DrawerLayoutAndroid>
            </View> 
        )
    },  
    
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}); 

module.exports = BarcampMain;