const React = require('react');

const  {
    View,
    Text,
    StyleSheet
} = require('react-native');

class BarcampCardView extends React.Component {
   
    //TODO: TO BE DONE: refacor code from schedule.js
    
    
    render() {
        return(
            <Text style={styles.title}>
                {this.props.text}
            </Text>
        )
    }
    
}

const styles = StyleSheet.create({

});

module.exports = BarcampCardView;
    
 