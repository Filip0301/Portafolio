import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Authentication is handled securely on the client-side by Firebase.
  return NextResponse.next();
}

export const config = {
  matcher: [],
};

