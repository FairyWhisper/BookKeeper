import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { initSplash } from '@/splash';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';


SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [appReady, setAppReady] = useState(false);
  const colorScheme = useColorScheme(); // ✅ moved up

  useEffect(() => {
    async function prepare() {
      await initSplash();
      setAppReady(true);
    }
    prepare();
  }, []);

  if (!appReady) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000' }}>
        <p style={{ color: '#fff' }}>Loading BookKeeper...</p>
      </div>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen name="HomeScreen" options={{ title: 'Home' }} />
        <Stack.Screen name="LibraryScreen" options={{ title: 'Library' }} />
        <Stack.Screen name="SettingsScreen" options={{ title: 'Settings' }} />
      </Stack>
    </ThemeProvider>
  );
}