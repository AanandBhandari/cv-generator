declare global {
  namespace NodeJS {
   export interface ProcessEnv {
      ENVIRONMENT: string;
      SITE: string;
      PORT: string;
    }
  }
}

declare module 'express-async-errors';
