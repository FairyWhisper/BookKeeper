import { BackButton } from '@/components/navigation/BackButton';
import { TabBar } from '@/components/navigation/TabBar';
import { Link } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';


export default function HomeScreen(): JSX.Element {
  // Fade animation value
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Slide animation value
  const translateY = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [80, 0], // dramatic slide upward
  });

  // Run animation on mount
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // slower so you SEE it
      delay: 300,     // pause before appearing
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // JSX
  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: fadeAnim, transform: [{ translateY }] },
      ]}
    >
      <BackButton />
      <Text style={styles.title}>Welcome to BookKeeper</Text>
      <Text style={styles.subtitle}>Your personal library starts here.</Text>
      
      <Link href="/SettingsScreen" style={styles.link}>
  Go to Settings
</Link>

      <TabBar />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  link: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 20,
    marginBottom: 20,
  },
});

