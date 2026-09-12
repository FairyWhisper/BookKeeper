import { router } from 'expo-router';

export function navigate(screen: string) {
  router.push(screen);
}

export function goBack() {
  router.back();
}
