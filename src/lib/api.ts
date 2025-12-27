import type { User } from '../types';

const BASE_URL = import.meta.env.PUBLIC_API_URL;

interface RequestOptions extends RequestInit {
    body?: any;
}

export async function apiRequest<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    options: RequestOptions = {}
): Promise<T> {
    // 1. Get the token from localStorage
    // (We'll store it here after a successful login)
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

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

        // 2. Handle 401 Unauthorized (Expired or invalid token)
        if (response.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
            throw new Error('Session expired. Please login again.');
        }

        // 3. Handle other errors
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `API Error: ${response.status}`);
        }

        // Return the data as the requested type
        return await response.json() as T;
    } catch (error) {
        console.error(`Fetch error at ${endpoint}:`, error);
        throw error;
    }
}