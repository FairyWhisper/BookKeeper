import { ANIMATION } from '@/constants';
import * as SplashScreen from 'expo-splash-screen';
import { Platform } from 'react-native';

export async function initSplash() {
  try {
    if (Platform.OS !== 'web') {
    await SplashScreen.preventAutoHideAsync();

    // Simulate loading or wait for actual app readiness
    await new Promise(resolve => setTimeout(resolve, ANIMATION.splashDuration));

    if (Platform.OS !== 'web') {
    await SplashScreen.hideAsync();
  } catch (e) {
    console.warn('Splash error:', e);
  }
}
