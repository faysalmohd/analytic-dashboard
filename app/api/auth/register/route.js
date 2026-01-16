import db from '@/lib/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

export async function POST(req) {
  const { name, email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const existing = db
    .prepare('SELECT * FROM users WHERE email = ?')
    .get(email);

  if (existing) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  db.prepare(`
    INSERT INTO users (id, name, email, password)
    VALUES (?, ?, ?, ?)
  `).run(randomUUID(), name, email, hashed);

  return NextResponse.json({ success: true });
}
