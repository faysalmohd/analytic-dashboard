import { NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl;

  // Public routes
  if (pathname.startsWith('/main')) {
    return NextResponse.next();
  }

  // Protect dashboard routes
  if (pathname.startsWith('/main')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      verifyToken(token);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/main/:path*'],
};
