import React from 'react';
import { Dimensions, ScrollView, View, Image } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.5;

const Carousel = ({ images }) => {
    if (images.length) {
    return (
      <View style={style.carouselStyle}>
        <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        >
      {
        images.map(image =>
        (
          <Image
            key={image.small}
            style={style.image}
            source={{ uri: image.large }}
          />
        ))}
        </ScrollView>
        </View>
    );
    }
  };


const style = {
  carouselStyle: {
    height,
  },
  image: {
    height,
    width
  }
};


export default Carousel;
