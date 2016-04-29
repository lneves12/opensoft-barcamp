const React = require('react');

const  {
    View,
    Text,
    StyleSheet
} = require('react-native');

class BarcampTitle extends React.Component {
   
    
    render() {
        return(
            <Text style={styles.title}>
                {this.props.text}
            </Text>
        )
    }
    
}

const styles = StyleSheet.create({
  title: {
      color: '#1b80a0',
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 25,
      marginTop: 20,
      marginBottom: 10
  },
});

module.exports = BarcampTitle;
    
 