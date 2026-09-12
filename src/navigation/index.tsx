import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="HomeScreen" options={{ title: 'Home' }} />
      <Stack.Screen name="LibraryScreen" options={{ title: 'Library' }} />
    </Stack>
  );
}
