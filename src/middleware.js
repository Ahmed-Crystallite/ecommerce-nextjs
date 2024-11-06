import { NextResponse } from "next/server"

export function middleware(request) {
  const path = request.nextUrl.pathname

  const ispublicPath =
    path === "/login" || path === "/signup" || path === "verifyemail"

  const token = request.cookies.get("token")?.value || ""

  if (ispublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (!ispublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
}
export const config = {
  matcher: [
    "/login",
    "/signup",
    "/profile",
    "/cart",
    "/cart/checkout",
    "/products",
    "/verifyemail",
  ],
}
