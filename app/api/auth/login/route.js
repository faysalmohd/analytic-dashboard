import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';
import bcrypt from 'bcryptjs';

// TEMP user (replace with DB later)
const user = {
  id: 1,
  email: 'admin@example.com',
  password: bcrypt.hashSync('password123', 10),
};

export async function POST(req) {
  const { email, password } = await req.json();

  if (email !== user.email) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = signToken({ id: user.id, email: user.email });

  const response = NextResponse.json({ success: true });

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });

  return response;
}
