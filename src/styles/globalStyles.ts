import { ANIMATION } from '@/constants';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadeIn: {
    opacity: 0,
    transitionDuration: `${ANIMATION.fadeIn}ms`,
  },
});
