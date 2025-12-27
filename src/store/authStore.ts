// src/store/authStore.ts
import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';
import type { User } from '../types';

// 1. Persistent Token: Automatically syncs with localStorage
// We use a string "null" or empty string because persistentAtom prefers strings
export const $token = persistentAtom<string | undefined>('token', undefined);

// 2. User Profile: Switched from 'map' to 'atom' to allow null
export const $user = atom<User | null>(null);

// 3. Computed state: Is the user logged in?
export const $isLoggedIn = atom<boolean>(false);

// Listen for token changes to update the isLoggedIn status
// This runs whenever $token.set() is called
$token.listen((token) => {
    $isLoggedIn.set(!!token);
});

/**
 * Helper to log out and cleanup
 */
export function logout() {
    $token.set(undefined);
    $user.set(null);
    if (typeof window !== 'undefined') {
        // Optional: Clear everything from localStorage to be safe
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
}

/**
 * Helper to update user data after login
 */
export function setUser(userData: User) {
    $user.set(userData);
}