import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Login from './container/Login';
import ChatScreen from './container/ChatScreen';
import HotelScreen from './container/HotelScreen';
import MapTest from './components/common/MapTest';

import * as actions from './actions';

class RouterComponent extends Component {

  logoutUser() {
      this.props.logoutUser();
      this.props.sessionLogout();
      Actions.auth();
 }

  renderRightButton = () => {
    return (
        <TouchableOpacity onPress={this.logoutUser.bind(this)}>
        <Icon name='logout' size={20} color='white' style={{ marginRight: 15 }} />
        </TouchableOpacity>
    );
  }

  renderBackButton = () => {
    return (
      <TouchableOpacity onPress={() => Actions.pop()} >
      <Icon name='arrow-left' size={20} color='white' style={{ marginLeft: 15 }} />
      </TouchableOpacity>
    );
  }

 renderPlaceholder = () => <View />

 render() {
   // const logoutIcon =
   // <Icon name='logout' size={20} color='white' style={{ marginRight: 15 }} />;
  return (
   <Router navigationBarStyle={style.navbarStyle}>
    <Scene
    key='root'
    titleWrapperStyle={{ alignItems: 'center' }}
    titleStyle={style.titleStyle}
    renderLeftButton={this.renderPlaceholder}
    renderRightButton={this.renderPlaceholder}
    hideNavBar
    >
    <Scene key='auth' >
       <Scene
        key='login'
        component={Login}
        title='LOGIN'
        titleStyle={style.titleStyle}
        initial
       />
       </Scene>
        <Scene key='main'>
     <Scene
      key='chatScreen'
      component={ChatScreen}
      title='Chat Screen'
      titleStyle={style.titleStyle}
      renderRightButton={this.renderRightButton}
      rightButtonTextStyle={{ color: 'white', fontSize: 15 }}
     />
     <Scene
      key='hotelScreen'
      title='Hotel'
      titleStyle={style.titleStyle}
      component={HotelScreen}
      renderLeftButton={this.renderBackButton}
     />
     <Scene
      key='maps'
      title='Map'
      titleStyle={style.titleStyle}
      component={MapTest}
      renderLeftButton={this.renderBackButton}
     />
     </Scene>

      </Scene>
   </Router>
 );
}
}

const style = {
 navbarStyle: {
  backgroundColor: '#00aef0',
  height: 70
},
 titleStyle: {
   flex: 1,
   textAlign: 'center',
   color: 'white',
   letterSpacing: 1.5
 }
};
export default connect(null, actions)(RouterComponent);
