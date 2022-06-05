declare global {
  namespace NodeJS {
   export interface ProcessEnv {
      ENVIRONMENT: string;
      SITE: string;
      SOCKET_SITE: string;
      PORT: string;
      SOCKET_PORT: number;
    }
  }
}

declare module 'express-async-errors';
