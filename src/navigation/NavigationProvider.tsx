import { ThemeProvider, theme } from '@/theme';
import { Stack } from 'expo-router';

export function NavigationProvider() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.background },
          headerTintColor: theme.colors.text,
        }}
      />
    </ThemeProvider>
  );
}
