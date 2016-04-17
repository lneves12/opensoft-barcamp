const React = require('react-native');

const  {
    View,
    Text,
    StyleSheet
} = React;

const BarcampColors = require('./BarcampColors');

class YearIcon extends React.Component {
    
    render() {
        let selectedTitleStyle = this.props.selected && styles.selectedTitle;
        let selectedContainerStyle = this.props.selected && styles.selectedContainer;
       
        return(
            <View style={[styles.container, selectedContainerStyle]}>
                <Text style={[styles.title, selectedTitleStyle]}>
                    {this.props.year}
                </Text> 
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: BarcampColors.darkText,
  },
  selectedContainer: {
    borderColor: BarcampColors.selectedColor
  },
  title: {
    margin: 5,
    fontSize: 11,
    color: BarcampColors.darkText,
  },
  selectedTitle: {
    color: BarcampColors.selectedColor,
  },
});

module.exports = YearIcon;
    
 