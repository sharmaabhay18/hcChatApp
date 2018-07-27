import React from 'react';
import { View } from 'react-native';
import ContentLoader from 'react-native-content-loader'
import { Circle, Rect } from 'react-native-svg'

const ContentLoaderComponent = () => {
 return (
   <View style={style.loaderStyle}>
   <ContentLoader
   primaryColor="#f2f2f2"
   secondaryColor="#fff"
   duration={700}
   height={140}
   >
       <Rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
       <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
       <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
       <Rect x="0" y="80" rx="3" ry="3" width="350" height="10" />
       <Rect x="0" y="100" rx="3" ry="3" width="200" height="10" />
       <Rect x="0" y="120" rx="3" ry="3" width="360" height="10" />
   </ContentLoader>
   </View>
 );
};

const style = {
 loaderStyle: {
  marginTop: 15,
  padding: 10,
  borderWidth: 1,
  borderRadius: 5,
  backgroundColor: '#fff'
 }
};

export { ContentLoaderComponent };
