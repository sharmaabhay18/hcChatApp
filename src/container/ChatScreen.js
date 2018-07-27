import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { TextInput } from '@shoutem/ui';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection, ContentLoaderComponent } from '../components/common';
import ComponentList from '../components/ComponentList';

class ChatScreen extends Component {

onChangeText(text) {
  this.props.chatScreenInput(text);
}

onSubmitEditing() {
  const { text } = this.props;
  if (!text) return;
  this.props.startFetchingData({ text });
}

renderOutput() {
  const { isLoading, dataLoad } = this.props;
  console.log('loading', isLoading);
  console.log(dataLoad);
   if (isLoading) {
     return (
       <ScrollView>
       <ContentLoaderComponent />
       <ContentLoaderComponent />
       <ContentLoaderComponent />
       </ScrollView>
     );
   } else if (dataLoad) {
   return (
     <View style={{ alignItems: 'center', marginTop: 5 }}>
     <ComponentList />
     </View>
   );
   }
   return (
       <View style={{ alignItems: 'center', marginTop: 5 }}>
      <Text>Hello! Please search for your destination.</Text>
      </View>
   );
}

  render() {
    const { chatScreenInput, viewStyle } = style;
    return (
      <View style={viewStyle}>
      <CardSection style={{ padding: 0 }}>

      <TextInput
       value={this.props.text}
       onChangeText={this.onChangeText.bind(this)}
       placeholder='Type'
       onSubmitEditing={this.onSubmitEditing.bind(this)}
       style={chatScreenInput}
      />
      </CardSection>
      {this.renderOutput()}
      </View>
    );
  }
}

const style = {
  viewStyle: {
    margin: 10,
    elevation: 2
  },
  chatScreenInput: {
   flex: 1
  }
};

const mapStateToProps = state => {
  return state.csInput;
};

export default connect(mapStateToProps, actions)(ChatScreen);
