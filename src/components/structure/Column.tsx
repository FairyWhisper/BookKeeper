import React, { JSX } from 'react';
import { View, ViewStyle } from 'react-native';

export default function Column({ children, style }: { children: React.ReactNode; style?: any }) {
  return <View style={style}>{children}</View>;
}

export function Row({ children, style }: RowProps): JSX.Element {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      {children}
    </View>
  );
}
interface RowProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}