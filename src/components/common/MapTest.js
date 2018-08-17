import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';

Mapbox.setAccessToken('pk.eyJ1IjoiYWJoYXkxOCIsImEiOiJjamtreTM3eGExcHpyM2twajMxZWF0Z2NiIn0.wLl_cqbCA7gScUrxVxiXcQ');

class MapTest extends Component<{}> {

renderAnnotations() {
    const { latitude, longitude, name } = this.props.data;
  return (
        <Mapbox.PointAnnotation
         key='pointAnnotation'
         id='pointAnnotation'
         coordinate={[longitude, latitude]}
        >
         <View style={styles.annotationContainer}>
           <View style={styles.annotationFill} />
         </View>
         <Mapbox.Callout
         title={name}
         />
       </Mapbox.PointAnnotation>
     );
}


  render() {
    const { latitude, longitude } = this.props.data;
    return (
      <View style={styles.container}>
      <Mapbox.MapView
          scrollEnabled
          showUserLocation
          styleURL={Mapbox.StyleURL.Light}
          zoomLevel={16}
          style={styles.container}
          centerCoordinate={[longitude, latitude]}
      >
          {this.renderAnnotations()}
      </Mapbox.MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
  },
  annotationFill: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});

const mapStateToProps = state => {
  return state.csInput;
};

export default connect(mapStateToProps)(MapTest);
