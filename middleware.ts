import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth')
  const path = request.nextUrl.pathname

  // Protected routes
  if (path.startsWith('/dashboard')) {
    if (!authCookie) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }
  }

  // Auth routes (when already logged in)
  if ((path === '/sign-in' || path === '/sign-up') && authCookie) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/sign-in', '/sign-up']
}
