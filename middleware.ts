import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("auth");
  const path = request.nextUrl.pathname;

  // If on sign-in or sign-up and already authenticated
  if ((path === "/sign-in" || path === "/sign-up") && authCookie) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Protect the dashboard and other pages
  if (path.startsWith("/dashboard") && !authCookie) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}
