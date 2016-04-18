const React = require('react-native');

const  {
    View,
    Text,
    DrawerLayoutAndroid,
    StatusBar,
    StyleSheet
} = React;


const leftMenuApi = require('./LeftMenuAndroid/leftMenuApi');

const LeftMenu = require('./LeftMenuAndroid/LeftMenu');
const BarcampHeader = require('./common/BarcampHeader');

class BarcampApp extends React.Component {

    render() {
        
        const navigationView = (
            <LeftMenu style={styles.container}> </LeftMenu>
        );
        
        const handleDrawerInit = (drawer) => {
            leftMenuApi.init(drawer)
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
                            title='2016 - South Side of Life'
                        />
                </DrawerLayoutAndroid>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = BarcampApp;