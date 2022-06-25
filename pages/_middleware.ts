import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const signedinPages = ["/"];

export function middleware(req) {
  const cookie = req.cookies.INTELLI_ACCESS_TOKEN;
  if (signedinPages.find((url) => url === req.nextUrl.pathname)) {
    if (!cookie) {
      const url = req.nextUrl.clone();
      console.log(url);
      url.pathname = "/signin";
      url.search = "";
      return NextResponse.redirect(url);
    }
  }
}
