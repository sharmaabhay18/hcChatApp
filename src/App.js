import React, { Component } from 'react';
import { View, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Dialogflow from 'react-native-dialogflow';
import reducers from './reducers';
import RouterComponent from './RouterComponent';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
class App extends Component {

 componentWillMount() {
   Dialogflow.setConfiguration(
   '90133fd6ac2a461ea2d9fd3e28351a9a', Dialogflow.LANG_ENGLISH
   );
   this.initializeFirebase();
 }

 initializeFirebase() {
   const firebase = require('firebase');
   // Initialize Firebase
   const config = {
     apiKey: 'AIzaSyADD4Z51xRzI1nWMC0hfP8W6IUNaCMEhQs',
     authDomain: 'chatapp-81f14.firebaseapp.com',
     databaseURL: 'https://chatapp-81f14.firebaseio.com',
     projectId: 'chatapp-81f14',
     storageBucket: 'chatapp-81f14.appspot.com',
     messagingSenderId: '30449396221'
   };
   firebase.initializeApp(config);
 }

  render() {
    Dialogflow.requestEvent('WELCOME', null, r => console.log(r), e => console.log(e));
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
   return (
     <Provider store={store}>
     <View style={style.containerMain}>
     <RouterComponent />
     </View>
     </Provider>
   );
   }
}

const style = {
  containerMain: {
    flex: 1,
    justifyContent: 'center'
  }
};

export default App;
