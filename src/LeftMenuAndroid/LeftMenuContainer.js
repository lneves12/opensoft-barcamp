'use strict';

const React = require('react-native');

const  {
    View,
    Text,
    StyleSheet
} = React;

const BarcampColors = require('./../common/BarcampColors');

const MenuItem = require('./MenuItem');

class LeftMenuContainer extends React.Component {
    
    render() {
       
        return(
            <View style={styles.container}>
                <MenuItem year='2016'
                          text='South Side of Life'
                          selected={false}>
                </MenuItem>
                <MenuItem year='2015'
                          text='Freedom'
                          selected={true}>
                </MenuItem>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BarcampColors.backgroundLighColor
    }
});

module.exports = LeftMenuContainer;
    
 