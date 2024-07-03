import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieAUth = request.cookies.get('TOKEN')
  const response = NextResponse.next()

  if (!cookieAUth) {
    // return NextResponse.redirect(new URL('/login', request.url))
  }

  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!login|_next/static|_next/image|favicon.ico|img|icons|svg).*)'],
}
