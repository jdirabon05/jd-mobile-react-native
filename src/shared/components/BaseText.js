import React from 'react';
import { Text } from 'react-native';

export const BaseText = ({
  children,
  color = '#000000', // Default color: Black
  size = 16,         // Default size: 16px
  weight = 'normal', // Default weight: normal
  style,             // Allows passing any additional standard Text styles
  ...rest            // Forwards other native props like numberOfLines, onPress, etc.
}) => {
  return (
    <Text 
      style={[{ color, fontSize: size, fontWeight: weight }, style]} 
      {...rest}
    >
      {children}
    </Text>
  );
};
