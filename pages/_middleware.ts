import { NextResponse } from "next/server";

/**
 * middleware for checking if user is signed if
 * once user is verified they are given access to the signedinpages
 */

const signedinPages = ["/dashboard"];

export function middleware(req: {
  cookies: { INTELLI_ACCESS_TOKEN: any };
  nextUrl: { pathname: string; clone: () => any };
}) {
  const cookie = req.cookies.INTELLI_ACCESS_TOKEN;
  if (signedinPages.find((url) => url === req.nextUrl.pathname)) {
    if (!cookie) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      url.search = "";
      return NextResponse.redirect(url);
    }
  }
}
