import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
  const { address, starRating, name, lowestRate } = this.props.res;
  return (
    <TouchableWithoutFeedback>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <CardSection>
        <Image
        style={{ width: 66, height: 58 }}
        source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
        />
        <Text>{name}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
}
}


export default connect(null)(ListItem);
