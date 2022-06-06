declare global {
  namespace NodeJS {
   export interface ProcessEnv {
      ENVIRONMENT: string;
      SITE: string;
      NOTIFICATION_SERVER: string;
      PORT: string;
      NOTIFICATION_SERVER_PORT: string;
    }
  }
}

declare module 'express-async-errors';
