// src/lib/api.ts
import { $token, logout } from '../store/authStore';

const BASE_URL = import.meta.env.PUBLIC_API_URL;

interface RequestOptions extends RequestInit {
    body?: any;
}

export async function apiRequest<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    options: RequestOptions = {}
): Promise<T> {

    // ✅ FIX: Only try to get the token if we are in the browser
    // This prevents errors during Astro's build/SSR phase
    const isBrowser = typeof window !== 'undefined';
    const token = isBrowser ? $token.get() : undefined;

    const headers = new Headers(options.headers);
    headers.set('Content-Type', 'application/json');

    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    const config: RequestInit = {
        ...options,
        method,
        headers,
    };

    if (options.body) {
        config.body = JSON.stringify(options.body);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);

        if (response.status === 401) {
            // ✅ Only attempt logout logic if in browser
            if (isBrowser) logout();
            throw new Error('Session expired. Please login again.');
        }

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `API Error: ${response.status}`);
        }

        return await response.json() as T;
    } catch (error) {
        console.error(`Fetch error at ${endpoint}:`, error);
        throw error;
    }
}