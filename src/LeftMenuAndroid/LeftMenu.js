'use strict';

const React = require('react');

const  {
    View,
    Text,
    StyleSheet
} = require('react-native');

const LeftMenuTop = require('./LeftMenuTop');
const LeftMenuContainer = require('./LeftMenuContainer');

let LeftMenu = React.createClass({
    
    render() {
       
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <LeftMenuTop />
                </View>
                <View style={styles.menu}>
                    <LeftMenuContainer
                        selectedBarcamp={this.props.selectedBarcamp}
                        onMenuItemPress={this.props.onMenuItemPress} />
                </View>
            </View>
        )
    }
    
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex:2,
  },
  menu: {
    flex:3,
  }
});

module.exports = LeftMenu;
    
 