'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function AuthNav() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex items-center space-x-4">
        <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-700">
          Привіт, {session.user.name}
          {session.user.role === 'admin' && (
            <span className="ml-1 px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
              Admin
            </span>
          )}
        </span>
        
        {session.user.role === 'admin' && (
          <Link
            href="/admin"
            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Адмінка
          </Link>
        )}
        
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
        >
          Вийти
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <Link
        href="/auth/signin"
        className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
      >
        Увійти
      </Link>
      <Link
        href="/auth/signup"
        className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
      >
        Реєстрація
      </Link>
    </div>
  );
}
