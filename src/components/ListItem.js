import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { Card, CardSection, Button } from './common';

const { width } = Dimensions.get('window');
const imageWidth = width * 0.3;
const height = width * 0.4;

class ListItem extends Component {

  onButtonPress() {
    const { id } = this.props.res;
    console.log('viewId', id);
    this.props.selectedHotelId(id);
  }

  renderHotelPage() {
    const { shouldRedirect } = this.props;

    console.log('redirect', shouldRedirect);
    if (shouldRedirect) {
      const data = this.props.res;
      this.props.selectedHotelDetails(data);
      Actions.hotelScreen();
    }
  }

  render() {
  const { starRating, name, lowestRate } = this.props.res;
  let image = '';
  if (this.props.res.images.length === 0) {
     image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuUsdX0nJJ6FM_1QxYQ0hvPHaTCWqXKFl7DmgYpP1uuYVGibXEg';
  } else {
     image = this.props.res.images[0].large;
  }

  return (
        <Card>
        <CardSection style={{ padding: 0 }}>
        <Image
        style={{ width: imageWidth, height }}
        source={{ uri: image }}
        />
        <View style={{ paddingTop: 10, flex: 1, flexDirection: 'column' }}>
        <View
         style={{
           flex: 1,
           flexWrap: 'wrap',
           flexDirection: 'column',
           justifyContent: 'space-between',
           alignItems: 'flex-start',
           paddingLeft: 10,
           position: 'relative',
           marginBottom: 5
         }}
        >
        <Text>{name}</Text>
        <Text style={{ color: '#00aef0', paddingTop: 3 }}>Ratings: {starRating}</Text>
        </View>
        <View
          style={{
          flex: 1,
          flexDirection: 'row',
          borderTopWidth: 1,
          borderColor: '#ddd',
          alignItems: 'flex-end',
          alignContent: 'space-around',
          paddingLeft: 5,
          padding: 10,
          marginLeft: 5
         }}
        >
        <Text>Price: {lowestRate}
          <Icon name='currency-eur' size={12} color='grey' />
        </Text>
        <Button
         style={{ paddingLeft: 6, paddingRight: 6 }}
         onPress={this.onButtonPress.bind(this)}
        >
         View </Button>
        {this.renderHotelPage()}
        </View>
        </View>
        </CardSection>
        </Card>
  );
}
}

const mapStateToProps = (state, ownProps) => {
 const shouldRedirect = state.csInput.id === ownProps.res.id;
 return { shouldRedirect };
};

export default connect(mapStateToProps, actions)(ListItem);
