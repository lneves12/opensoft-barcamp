const React = require('react');

const  {
    View,
    Text,
    ToolbarAndroid,
    StyleSheet
} = require('react-native');

const leftMenuApi = require('./../LeftMenuAndroid/leftMenuApi');
const BarcampColors = require('./BarcampColors');

class BarcampHeader extends React.Component {
   
    
    render() {
        let leftItem = {
            title: 'Menu',
            icon: require('./img/hamburger.png'),
            onPress: leftMenuApi.openDrawer,
        };
       
        let selectedTitleStyle = this.props.selected && styles.selectedTitle;
       
        return(
            <View style={styles.toolbarContainer}>
                <ToolbarAndroid
                    navIcon={leftItem && leftItem.icon}
                    onIconClicked={leftItem && leftItem.onPress}
                    title={this.props.title}
                    titleColor={BarcampColors.lightText}
                    style={styles.toolbar}>
                        {this.props.children}
                </ToolbarAndroid>
            </View>
        )
    }
    
}

var STATUS_BAR_HEIGHT =  25;
var HEADER_HEIGHT = 56 + STATUS_BAR_HEIGHT;

const styles = StyleSheet.create({
  toolbarContainer: {
    paddingTop: STATUS_BAR_HEIGHT,
    backgroundColor: BarcampColors.backgroundDarkColor
  },
  toolbar: {
    height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
  }
});

module.exports = BarcampHeader;
    
 