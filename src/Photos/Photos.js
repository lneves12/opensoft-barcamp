'use strict';

const React = require('react');

const  {
    View,
    Text,
    Image,
    ScrollView,
    ProgressBarAndroid,
    StyleSheet
} = require('react-native');

const BarcampColors = require('./../common/BarcampColors');
const BarcampPhoto = require('./../common/photo/BarcampPhoto')

const images = [
    {uri: 'https://scontent-mad1-1.xx.fbcdn.net/t31.0-8/885712_765215933575727_85541160619379851_o.jpg'},
    {uri: 'https://scontent-mad1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/885712_765215860242401_193508341841468629_o.jpg'}
]

const PUBLIC_ACCESS_TOKEN = 'CAAYAbbWS0C4BAKoE1MW0NZAEdh4h9cu5PzQs5iienIAsGZBUDlnEalhgmizvqbEmn5aqZCwjCUeI2jhdiqHnJg7Ww1X9bDZAZBtWIUAGuixOEhTo8WBhuBlbZBHyysz48jqe7eGKtw0bJZAFZBlU5eJ6eawhU42CZB09MEVUZBYm5EAgZC9mSMNwlt7HIqlQXB8qteTfs7sa5CDkwZDZD';
const album_id = 758082504289070;

const fetch_first_images = `https://graph.facebook.com/v2.6/${album_id}/photos?limit=45&access_token=${PUBLIC_ACCESS_TOKEN}`;

const Photos = React.createClass({
    
    getInitialState(){
      return {};  
    },
    
    componentDidMount() {
        fetch(fetch_first_images, {
            method: 'get'
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            this.setState({
                images: jsonResponse.data
            }) 
        }).catch((err) => {
            console.log('why!! -' + err)
        });
    },
    
    hasEnoughData(){
      return this.state.images;  
    },
    
    render() {
       
       let renderRow = (imageStartPos) => {
           return( 
                <View key={imageStartPos} style={styles.rowContainer}>
                    <BarcampPhoto
                        imageUri={`http://graph.facebook.com/${this.state.images[imageStartPos].id}/picture`} 
                        navigator={this.props.navigator}  />
                    <BarcampPhoto 
                        imageUri={`http://graph.facebook.com/${this.state.images[imageStartPos+1].id}/picture`} 
                        navigator={this.props.navigator}  />
                    <BarcampPhoto 
                        imageUri={`http://graph.facebook.com/${this.state.images[imageStartPos+2].id}/picture`} 
                        navigator={this.props.navigator}  />
                </View>
            )
       }
        
       let renderAllImages = () => {
           let imagesComponentsByRow = [];
           for(let i = 0; i < this.state.images.length; i += 3){
                imagesComponentsByRow.push(renderRow(i));
           }
           return imagesComponentsByRow;
       }; 
        
       if(this.hasEnoughData()){
            return(
                <View style={styles.container}>
                    <ScrollView>
                    
                        <Text style={styles.title}>
                            Facebook
                        </Text>
                        
                        {renderAllImages()}
                        
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <ProgressBarAndroid />
            ) 
        }   
    }
    
})

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#ffffff'
  },
  rowContainer: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: 0.5,
      marginRight: 0.5
  },
  title: {
      color: '#1b80a0',
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 25,
      marginTop: 20,
      marginBottom: 10
  }
});

module.exports = Photos;
    
 