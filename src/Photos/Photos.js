'use strict';

const React = require('react');

const  {
    View,
    Text,
    Image,
    ScrollView,
    ListView,
    ProgressBarAndroid,
    StyleSheet
} = require('react-native');

const BarcampColors = require('./../common/BarcampColors');
const BarcampTitle = require('./../common/BarcampTitle');
const PhotosRow = require('./PhotosRow');

const PUBLIC_ACCESS_TOKEN = 'EAAYAbbWS0C4BANHoOaeMJO6s0ze7RVGNSdSZB3gW8wsBykMUPfLjlkqA9AUgD2q4AaOh1mPZAFOwcupsNWacvZCOhtxkbdAUBsnw9kkuTuOc7n2eVMJJocdUCBkQLZAYTMlz0DefoYZBqxm8DBjoF2Jc5lec8164ZD';

 var DATASOURCE_MANAGER;

const Photos = React.createClass({

    getInitialState(){
      DATASOURCE_MANAGER = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {};
    },

    componentDidMount() {
        this.fetchPhotosFromFacebookAlbum(this.props.photos.facebookAlbumId);
    },

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.imagesByRow !== nextState.imagesByRow;
    },

    componentWillReceiveProps(nextProps) {
        if(!nextProps.photos) {
            this.setState({imagesByRow: []});
        } else {
            if(this.props.photos !== nextProps.photos) {
                this.fetchPhotosFromFacebookAlbum(nextProps.photos.facebookAlbumId);
            }
        }
    },

    fetchPhotosFromFacebookAlbum(albumId) {
            fetch(`https://graph.facebook.com/v2.6/${albumId}/photos?limit=400&access_token=${PUBLIC_ACCESS_TOKEN}`, {
                method: 'get'
            }).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                let imagesByRow = [];
                let row = [];
                for(let i = 0; i <= jsonResponse.data.length; i++){
                    if(i !== 0 && i%3 === 0){
                        imagesByRow.push(row);
                        row = []
                    }
                    row.push(jsonResponse.data[i])
                }
                this.setState({
                    imagesByRow : DATASOURCE_MANAGER.cloneWithRows(imagesByRow)
                })
            }).catch((err) => {
                console.log('why!! -' + err)
            });
    },

    hasFetchedData(){
      return this.state.imagesByRow;
    },

    render() {

       if(this.hasFetchedData()){

           if(this.state.imagesByRow.length === 0){
                return(
                    <View style={styles.container}>
                        <Text> No photos available yet... </Text>
                    </View>
                )
           }

            return(
                <View style={styles.container}>
                    <ListView
                        initialListSize={5}
                        pageSize={5}
                        renderHeader={() => <BarcampTitle text='Facebook Albuns' /> }
                        dataSource={this.state.imagesByRow}
                        renderRow={(row) => <PhotosRow navigator={this.props.navigator} row={row} />}
                    />
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
  }
});

module.exports = Photos;
