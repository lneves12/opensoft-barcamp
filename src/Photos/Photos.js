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
const BarcampPhoto = require('./../common/photo/BarcampPhoto');
const BarcampTitle = require('./../common/BarcampTitle');


const PUBLIC_ACCESS_TOKEN = 'CAAYAbbWS0C4BAKoE1MW0NZAEdh4h9cu5PzQs5iienIAsGZBUDlnEalhgmizvqbEmn5aqZCwjCUeI2jhdiqHnJg7Ww1X9bDZAZBtWIUAGuixOEhTo8WBhuBlbZBHyysz48jqe7eGKtw0bJZAFZBlU5eJ6eawhU42CZB09MEVUZBYm5EAgZC9mSMNwlt7HIqlQXB8qteTfs7sa5CDkwZDZD';

const Photos = React.createClass({
    
    getInitialState(){
      return {};  
    },
    
    componentDidMount() {
        this.fetchPhotosFromFacebookAlbum(this.props.photos.facebookAlbumId);
    },
    
    componentWillReceiveProps(nextProps) {
        if(!nextProps.photos) {
            this.setState({images: []});
            this.scrollViewRef.scrollTo({y: 0});
        } else {
            if(this.props.photos !== nextProps.photos) {
                this.fetchPhotosFromFacebookAlbum(nextProps.photos.facebookAlbumId);
                this.scrollViewRef.scrollTo({y: 0});
            }      
        }
    },
    
    fetchPhotosFromFacebookAlbum(albumId) {
            fetch(`https://graph.facebook.com/v2.6/${albumId}/photos?limit=30&access_token=${PUBLIC_ACCESS_TOKEN}`, {
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
           if(!this.state.images.length){
               return <Text style={{marginLeft: 20}}> No photos available yet... </Text>
           }
           
           let imagesComponentsByRow = [];
           for(let i = 0; i < this.state.images.length; i += 3){
                imagesComponentsByRow.push(renderRow(i));
           }
           return imagesComponentsByRow;
       }; 
        
       if(this.hasEnoughData()){
            return(
                <View style={styles.container}>
                    <ScrollView
                        ref={ref => this.scrollViewRef = ref}>
                    
                        <BarcampTitle text='Facebook Albuns' />
                        
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
        backgroundColor: '#eeeeee'
  },
  rowContainer: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: 0.5,
      marginRight: 0.5
  }
});

module.exports = Photos;
    
 