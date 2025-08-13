import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name: string;
      role: 'admin' | 'customer';
      image?: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'customer';
    image?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: 'admin' | 'customer';
    sub: string;
  }
}
