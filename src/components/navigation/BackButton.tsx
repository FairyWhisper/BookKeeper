import { useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';

export function BackButton() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()}>
      <Text>Back</Text>
    </Pressable>
  );
}
