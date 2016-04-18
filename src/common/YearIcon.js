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
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 2,
    borderColor: BarcampColors.darkText,
  },
  selectedContainer: {
    borderColor: BarcampColors.selectedColor
  },
  title: {
    margin: 2,
    fontSize: 12,
    fontWeight: 'bold',
    color: BarcampColors.darkText,
  },
  selectedTitle: {
    color: BarcampColors.selectedColor,
  },
});

module.exports = YearIcon;
    
 