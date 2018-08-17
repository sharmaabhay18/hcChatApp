import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children, style }) => {
  const { textStyle, buttonStyle } = styles;

  return (
   <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
   <Text style={textStyle}>{children}</Text>
   </TouchableOpacity>

  );
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#00aef0',
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8
   },
  buttonStyle: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00aef0',
    marginLeft: 'auto'
  }
};

export { Button };
