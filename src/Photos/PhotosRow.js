'use strict';

const React = require('react');

const  {
    View,
    StyleSheet
} = require('react-native');

const BarcampPhoto = require('./../common/photo/BarcampPhoto');

let PhotosRow = React.createClass({
    
    render() {

        let renderPhotos = () => {
            return this.props.row.map((photo) => {
                return (
                    <BarcampPhoto
                        key={photo.id}
                        imageUri={`http://graph.facebook.com/${photo.id}/picture`} 
                        navigator={this.props.navigator}  />
                )
            })
        }
        
        return(
            <View style={styles.rowContainer}>
                {renderPhotos()}
            </View>
        )
    }
    
});

const styles = StyleSheet.create({
  rowContainer: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: 0.5,
      marginRight: 0.5
  }
});

module.exports = PhotosRow;
    
 