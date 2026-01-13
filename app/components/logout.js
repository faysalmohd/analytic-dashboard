'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button className='bg-blue-600 text-white w-full p-2 rounded font-bold' onClick={() => signOut({ callbackUrl: '/login' })}>
      Logout
    </button>
  );
}
