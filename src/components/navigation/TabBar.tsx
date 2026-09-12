import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export function TabBar() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Link href="/HomeScreen" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>

      <Link href="/LibraryScreen" asChild>
        <Pressable>
          <Text>Library</Text>
        </Pressable>
      </Link>
    </View>
  );
}
