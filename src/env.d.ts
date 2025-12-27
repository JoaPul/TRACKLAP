/// <reference types="astro/client" />

interface ImportMetaEnv {
    // Define your environment variables here
    readonly PUBLIC_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}