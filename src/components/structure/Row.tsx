import React from 'react';
import { View, ViewStyle } from 'react-native';

interface RowProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export function Row({ children, style }: RowProps): JSX.Element {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      {children}
    </View>
  );
}
