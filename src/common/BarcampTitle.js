const React = require('react');

const  {
    View,
    Text,
    StyleSheet
} = require('react-native');

class BarcampTitle extends React.Component {
   
    
    render() {
        
        var color = this.props.color === 'light' ? '#97BDC9' : '#1b80a0';
        var fontSize = this.props.size === 'xl' ? 21 : 14;
        
        
        return(
            <Text style={[styles.title, {color}, {fontSize}]}>
                {this.props.text}
            </Text>
        )
    }
    
}

const styles = StyleSheet.create({
  title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 15,
      marginTop: 20,
      marginBottom: 10
  },
});

module.exports = BarcampTitle;
    
 