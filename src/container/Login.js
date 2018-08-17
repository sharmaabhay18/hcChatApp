import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Input, CardSection, Spinner, Button } from '../components/common';


class Login extends Component {

  onChangeEmail(email) {
     this.props.emailChanged(email);
  }

  onChangePassword(password) {
    this.props.passwordChanged(password);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onLogin() {
   const { loading } = this.props;
   if (loading) {
     return (
          <Spinner />
     );
   }
   return (
     <Button
      onPress={this.onButtonPress.bind(this)}
      style={{
       alignSelf: 'center',
       flex: 1,
       marginLeft: 10,
       marginRight: 10
       }}
     >
       <Text>Login</Text>
     </Button>
   );
  }

  render() {
    return (
    <KeyboardAvoidingView
     style={style.container}
     behavior="padding" enabled
    >
    <CardSection>
    <Input
     label='Email'
     placeholder='Enter Email'
     onChangeText={this.onChangeEmail.bind(this)}
     value={this.props.email}
    />
    </CardSection>
    <CardSection>
    <Input
     secureTextEntry
     label='Password'
     placeholder='Enter Password'
     onChangeText={this.onChangePassword.bind(this)}
     value={this.props.password}
    />
    </CardSection>
    <CardSection>
    {this.onLogin()}
    </CardSection>
    <View style={style.errorStyle}>
    <Text style={{ color: 'red' }}>{this.props.error}</Text>
    </View>
    </KeyboardAvoidingView >
    );
  }
}

const style = {
container: {
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 75,
  marginTop: 25
},
errorStyle: {
  alignItems: 'center',
  marginTop: 15
}
};

const mapStateToProps = ({ Auth }) => {
  const { email, password, loading, error } = Auth;
 return { email, password, loading, error };
};

export default connect(mapStateToProps, actions)(Login);
