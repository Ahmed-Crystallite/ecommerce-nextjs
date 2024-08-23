import { NextResponse } from 'next/server';
export function middleware(request) {
  console.log('Middleware triggered:', request.url);
  return NextResponse.next();
}

export const config = {
  matcher: '/products/:path*',
};
