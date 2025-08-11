declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: 'admin' | 'customer';
      image?: string;
    };
  }

  interface User {
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
  }
}
