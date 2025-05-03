import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {

  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Get the response
    const response = NextResponse.next();

    // Add the CORS headers
    response.headers.set('Access-Control-Allow-Origin', process.env.DOMAIN!);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');

    // Return the response with CORS headers
    return response;
  }

  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid token:", error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}


export const config = {
  matcher: ["/dashboard","/dashboard/(.*)","/api/:path*"],
};
