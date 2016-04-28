const React = require('react');

const  {
    View,
    Navigator,
    StyleSheet,
    BackAndroid
} = require('react-native');


const BarcampMain = require('./BarcampMain/BarcampMain');
const FullVideo = require('./common/video/FullVideo');


var ROUTES = {
  BarcampMain,
  FullVideo
};

var BarcampApp = React.createClass({

  componentDidMount: function() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  },

  componentWillUnmount: function() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  },
  
  handleBackButton: function() {
    //TODO: [LN] - Still need support for the BackButton inside the leftmenu  
    //TODO: [LN] - Check the new android transition effect (Top Down effect) 
      
    const {navigator} = this.refs;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }
    return false;
  },

  renderScene: function(route, navigator){
    // let Component = ROUTES[route.name];
    let Component = route.component;
    return <Component route={route} navigator={navigator} />;
  },
 
  render : function(){
    return(
        <Navigator 
            ref="navigator"
            style={styles.container}
            initialRoute={{component: BarcampMain}}
            renderScene={this.renderScene}
            configureScene={(route) => { return this.props.sceneTransition }}/>
    );
  }
    
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}); 

module.exports = BarcampApp;