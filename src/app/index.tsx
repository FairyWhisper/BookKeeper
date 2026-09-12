import ScreenWrapper from '@/components/structure/ScreenWrapper';
import tokens from '@/styles/tokens';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <><ScreenWrapper>
      <Text style={styles.title}>Welcome to BookKeeper</Text>
      ...
    </ScreenWrapper><View style={styles.container}>
        <Text style={styles.title}>Welcome to BookKeeper</Text>
        <Text style={styles.subtitle}>Your personal library starts here.</Text>

        <View style={styles.nav}>
          <Link href="/HomeScreen" style={styles.link}>Home</Link>
          <Link href="/explore" style={styles.link}>Library</Link>
        </View>
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: tokens.colors.background,
    padding: tokens.spacing.lg,
  },
  title: {
    fontSize: tokens.typography.heading.fontSize,
    fontWeight: '600',
    marginBottom: tokens.spacing.sm,
    color: tokens.colors.text.primary,
  },
  subtitle: {
    fontSize: tokens.typography.body.fontSize,
    color: tokens.colors.text.secondary,
    marginBottom: tokens.spacing.md,
  },
  nav: { flexDirection: 'row', gap: tokens.spacing.md },
  link: { fontSize: tokens.typography.body.fontSize, color: tokens.colors.primary },
});
