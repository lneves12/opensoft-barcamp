const React = require('react');

const  {
    View,
    Text,
    ToolbarAndroid,
    StyleSheet
} = require('react-native');

const LeftMenuApi = require('./../LeftMenuAndroid/LeftMenuApi');
const BarcampColors = require('./BarcampColors');

class BarcampHeader extends React.Component {
   
    
    render() {
        let leftItem = {
            title: 'Menu',
            icon: require('./img/hamburger.png'),
            onPress: LeftMenuApi.openDrawer,
        };
       
        let selectedTitleStyle = this.props.selected && styles.selectedTitle;
       
        return(
            <View style={[styles.toolbarContainer, {backgroundColor: this.props.backgroundColor}]}>
                <ToolbarAndroid
                    navIcon={leftItem && leftItem.icon}
                    onIconClicked={leftItem && leftItem.onPress}
                    title={this.props.title}
                    titleColor={BarcampColors.lightText}
                    style={[styles.toolbar, {backgroundColor: this.props.backgroundColor}]} >
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
    paddingTop: STATUS_BAR_HEIGHT
  },
  toolbar: {
    height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
  }
});

module.exports = BarcampHeader;
    
 