/// <reference types="node" />
/// <reference types="vite/client" />

declare namespace NodeJS {
  export interface ProcessEnv {
    APP_PORT: string;
    NODE_ENV: 'development' | 'production' | 'test';
    VITE_APP_VERSION: string;
  }
}

// Note: Environment variables are always strings
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_ENABLE_API_MOCK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
