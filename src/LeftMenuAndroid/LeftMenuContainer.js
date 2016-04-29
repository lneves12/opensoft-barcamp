'use strict';

const React = require('react');

const  {
    View,
    Text,
    StyleSheet
} = require('react-native');

const BarcampColors = require('./../common/BarcampColors');

const MenuItem = require('./MenuItem');

let LeftMenuContainer = React.createClass({
    
           
    isSelected(barcampId) {
        return this.props.selectedBarcamp.id === barcampId;
    },
    
    render() {
       
       //[TODO] - This MenuItems should be dynamic
        return(
            <View style={styles.container}>
                <MenuItem 
                    id='SouthSide'
                    year='2016'
                    text='South Side of Life'
                    selected={this.isSelected('SouthSide')}
                    onPress={this.props.onMenuItemPress}>
                </MenuItem>
                <MenuItem 
                    id='Freedom'
                    year='2015'
                    text='Freedom'
                    selected={this.isSelected('Freedom')}
                    onPress={this.props.onMenuItemPress}>
                </MenuItem>
                <MenuItem 
                    id='Memories'
                    year='2013'
                    text='Collective memories'
                    selected={this.isSelected('Memories')}
                    onPress={this.props.onMenuItemPress}>
                </MenuItem>
            </View>
        )
    }
    
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BarcampColors.backgroundLighColor
    }
});

module.exports = LeftMenuContainer;
    
 