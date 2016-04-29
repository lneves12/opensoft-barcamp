'use strict';

const React = require('react');

const  {
    View,
    Text,
    TouchableWithoutFeedback,
    ToastAndroid,
    ScrollView,
    StyleSheet
} = require('react-native');

const BarcampColors = require('./../common/BarcampColors');
const BarcampTitle = require('./../common/BarcampTitle')
const ExternalVideo = require('./../common/video/ExternalVideo');

var Schedule = React.createClass({
    
    componentWillReceiveProps(nextProps) {
        if(this.props.schedules !== nextProps.schedules) {
            this.forceUpdate()
            this.scrollViewRef.scrollTo({y: 0});
        }  
    },
    
    render() {
    
        let renderSchedules = () => {
            if(!this.props.schedules || this.props.schedules.length === 0) {
                return (
                    <Text style={{paddingLeft: 15}}> No schedule available yet... </Text>
                )
            }
            return this.props.schedules.map((schedule, index) => {
                return (
                    <View style={styles.card} key={index} elevation={2}>
                        <View style={styles.cardImage} >
                            <ExternalVideo
                                videoId={schedule.videoId}
                                navigator={this.props.navigator}>
                                <View style={styles.cardTitle}>
                                    <BarcampTitle 
                                        color='light' 
                                        size='xl' 
                                        text={schedule.title} />
                                </View>
                             </ExternalVideo>
                        </View>
                        <Text style={styles.cardContent}>
                            {schedule.desc}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableWithoutFeedback
                                onPress={() =>
                                ToastAndroid.show('To be done! :D', ToastAndroid.SHORT)}>
                                <Text style={styles.cardAction}>Share</Text>
                            </TouchableWithoutFeedback> 
                            <TouchableWithoutFeedback
                                onPress={() =>
                                ToastAndroid.show('To be done! :D', ToastAndroid.SHORT)}>
                                <Text style={styles.cardAction}>Detail</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                );
            })
        }
       
        return(
            <View style={styles.container}>
            
                <ScrollView 
                    ref={ref => this.scrollViewRef = ref}>
            
                    {renderSchedules()}
                
                </ScrollView>
            </View>
        )
    }
    
});

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#eeeeee'
  },
  card: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 8,
    marginTop: 8,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.22)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  cardImage: {
    height: 150
  },
  cardTitle: {
    position: 'absolute',
    left:     0,
    bottom:    0
  },
  cardContent: {
    margin: 15,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  cardAction: {
    borderStyle: 'solid',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    margin: 15,
    color: '#7AEBE9'
  },
});

module.exports = Schedule;
    
 