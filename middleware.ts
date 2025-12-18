import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle redirects for consolidated pages
  const redirects: Record<string, string> = {
    '/scenario': '/scenarios',
    '/performance-analytics': '/analytics', 
    '/data-manipulation': '/data',
  };

  // Handle redirects for removed development/testing pages
  const removedPages = [
    '/test-animations',
    '/integration-test', 
    '/final-testing',
    '/dashboard-demo',
    '/animations',
  ];

  // Check for exact matches in redirects
  if (redirects[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = redirects[pathname];
    return NextResponse.redirect(url, 301); // Permanent redirect
  }

  // Check for removed pages - redirect to 404
  if (removedPages.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/not-found';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};