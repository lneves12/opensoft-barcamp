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

class Schedule extends React.Component {
    
    render() {
       
        return(
            <View style={styles.container}>
            
                <ScrollView>
            
                    <BarcampTitle text='Resumo' />
                    
                    <View style={styles.card} elevation={2}>
                        <View style={styles.cardImage} >
                            <ExternalVideo
                                videoId='128780049'
                                navigator={this.props.navigator} />
                        </View>
                        <Text style={styles.cardContent}>
                            O Opensoft Barcamp aconteceu no dia 25 de Abril. Durante a tarde deste dia juntámos cerca de 40 pessoas num evento de partilha de ideias e de inspiração.
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
                    
                    <BarcampTitle text='Lies and Stats - 10min' />
                    
                    <View style={styles.card} elevation={2}>
                        <View style={styles.cardImage} >
                            <ExternalVideo
                                videoId='130081631'
                                navigator={this.props.navigator} />
                        </View>
                        <Text style={styles.cardContent}>
                            "Lies, damned lies, and statistics"{"\n"}
                            Existem mentiras, existem mentiras odiosas e existem estatísticas...
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
                    
                    <BarcampTitle text='10 minutes of Hapiness - 10min' />
                    
                    <View style={styles.card} elevation={2}>
                        <View style={styles.cardImage} >
                            <ExternalVideo
                                videoId='130989956'
                                navigator={this.props.navigator} />
                        </View>
                        <Text style={styles.cardContent}>
                            Quando a Walmart decidiu criar uma framework para node.js... nasceu hapi.js!!!
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
                
                </ScrollView>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#eeeeee'
  },
  card: {
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
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
    
 