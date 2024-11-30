import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/player/:path*',
}

/*
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  // Check if the user is authenticated
  const isLoggedIn = request.locals.user !== null;

  try {
    if (!isLoggedIn) {
      // Redirect to login page with a user-friendly message
      return NextResponse.redirect(
        new URL('/login', request.url),
        {
          status: 307, // Temporary Redirect to avoid potential SEO issues
          statusText: 'Please sign in to access the dashboard.',
        }
      );
    }

    // User is authenticated, continue with the request
    return NextResponse.next();
  } catch (error) {
    console.error('Error in middleware:', error);
    // Handle authentication errors gracefully, e.g., redirect to error page
    return NextResponse.redirect(new URL('/error', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'],
};
*/