import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;

  return (
   <TouchableOpacity onPress={onPress} style={buttonStyle}>
   <Text style={textStyle}>{children}</Text>
   </TouchableOpacity>

  );
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#00aef0',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00aef0',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
