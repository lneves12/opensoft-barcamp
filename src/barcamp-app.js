const React = require('react-native');

const  {
    View,
    Text,
    DrawerLayoutAndroid,
    StyleSheet
} = React;

const LeftMenu = require('./LeftMenu/LeftMenu');

class BarcampApp extends React.Component {
    
    render() {
        
         const navigationView = (
            <LeftMenu style={styles.container}> </LeftMenu>
        );
        
        return(
   
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                    </View> 
            </DrawerLayoutAndroid>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = BarcampApp;
    
 