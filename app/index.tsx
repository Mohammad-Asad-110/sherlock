import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';

// Simulated auth state — replace with real logic later
const isLoggedIn = false;

export default function EntryPoint() {
    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
        router.replace('/login');
    }, [segments]);

    return null;
}