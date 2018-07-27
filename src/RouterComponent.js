import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Login from './container/Login';
import ChatScreen from './container/ChatScreen';
import * as actions from './actions';

class RouterComponent extends Component {

  logoutUser() {
      this.props.logoutUser();
      Actions.auth();
 }

  renderRightButton = () => {
    return (
        <TouchableOpacity onPress={this.logoutUser.bind(this)}>
        <Icon name='logout' size={20} color='white' style={{ marginRight: 15 }} />
        </TouchableOpacity>
    );
  }

 render() {
   // const logoutIcon =
   // <Icon name='logout' size={20} color='white' style={{ marginRight: 15 }} />;
  return (
   <Router navigationBarStyle={style.navbarStyle}>
    <Scene
    key='root'
    titleWrapperStyle={{ alignItems: 'center' }}
    titleStyle={{ textAlign: 'center',
     flex: 1,
     color: 'white',
     letterSpacing: 1.5 }}
    hideNavBar
    >

    <Scene key='main'>
     <Scene
      key='chatScreen'
      component={ChatScreen}
      title='Chat Screen'
      renderRightButton={this.renderRightButton}
      rightButtonTextStyle={{ color: 'white', fontSize: 15 }}
     />
     </Scene>
     <Scene key='auth' >
        <Scene
         key='login'
         component={Login}
         title='LOGIN'
         initial
        />
        </Scene>
    </Scene>
   </Router>
 );
}
}

const style = {
 navbarStyle: {
  backgroundColor: '#00aef0'
},
titleNavBar: {

}
};
export default connect(null, actions)(RouterComponent);
