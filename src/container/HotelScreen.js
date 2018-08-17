import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as actions from '../actions';
import Carousel from '../components/common/Carousel';
import { Button, CardSection } from '../components/common';

class HotelScreen extends Component {

  render() {
    console.log(this.props);
    const { viewStyle, textName, textAddress } = style;
      const { name,
          address,
          starRating,
          images,
          lowestRate
        } = this.props.csInput.data;
    return (
      <ScrollView>
      <View styles={viewStyle}>
       <Carousel images={images} />
       <View style={{ borderWidth: 0, padding: 10, backgroundColor: '#00aef0' }}>
       <View style={{ flexWrap: 'wrap', flexDirection: 'row', paddingBottom: 3 }} >
       <Text style={textName}>{name}</Text>
       <Rating
       type="custom"
       startingValue={starRating}
       readonly
       imageSize={14}
       ratingBackgroundColor='#00aef0'
       style={{ paddingTop: 5, backgroundColor: '#00aef0' }}
       />
       </View>
       <Text style={textAddress}>{address}</Text>
       </View>
       <View
        style={{
         marginTop: 20,
         justifyContent: 'center',
         alignItems: 'center'
        }}
       >
       <CardSection
       style={{
         padding: 10,
         marginLeft: 10,
         marginRight: 10,
         backgroundColor: '#00aef0',
         borderRadius: 5
       }}
       >
       <TouchableOpacity>
       <Text style={{ color: 'white', fontSize: 18 }}>
       Book Room at {lowestRate}
       <Icon name='currency-eur' size={18} color='white' />
       </Text>
       </TouchableOpacity>
       </CardSection>
       <Button
      style={{
         marginTop: 20,
         alignSelf: 'flex-start',
         marginRight: 'auto'
       }}
       onPress={() => Actions.maps()}
       >
        Open Map
       </Button>
       </View>
      </View>
      </ScrollView>
    );
  }
}

const style = {
  viewStyle: {
    flexDirection: 'column'
  },
  textName: {
    fontSize: 18,
    color: 'white',
    paddingRight: 4
  },
  textAddress: {
    fontSize: 9
  }
};

const mapStateToProps = (state) => {
 return { csInput: state.csInput };
};

export default connect(mapStateToProps, actions)(HotelScreen);
