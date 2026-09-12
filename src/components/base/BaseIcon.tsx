// src/components/base/BaseIcon.tsx
import { useTheme } from '@/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FC } from 'react';

type BaseIconProps = {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  color?: keyof typeof theme.colors;
};

export const BaseIcon: FC<BaseIconProps> = ({
  name,
  size = 24,
  color = 'text',
}) => {
  const theme = useTheme();

  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={theme.colors[color]}
    />
  );
};
