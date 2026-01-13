'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError('Invalid credentials');
      return;
    }

    router.push('/main/home');
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 space-y-4">
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button className="bg-blue-500 text-white w-full p-2">
        Login
      </button>
    </form>
  );
}
