import React from 'react';
import { View, ViewStyle } from 'react-native';

interface GridProps {
  children: React.ReactNode;
  columns?: number;
  style?: ViewStyle | ViewStyle[];
}

export function Grid({ children, columns = 2, style }: GridProps): JSX.Element {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
        style,
      ]}
    >
      {React.Children.map(children, (child) => (
        <View style={{ width: `${100 / columns}%` }}>{child}</View>
      ))}
    </View>
  );
}
