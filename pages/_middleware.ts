import { NextResponse } from "next/server";

/**
 * middleware for checking if user is signed if
 * once user is verified they are given access to the signedinpages
 */
// Use REGEX on the protected routes so that any number or let range will be also blocked
const signedinPages = [
  "/dashboard",
  "/dashboard/add-restaurant",
  "/dashboard/menus",
  "/dashboard/menus/menu",
  "/dashboard/menus/menu/item",
  "/dashboard/menus/menu/item/:id",
  "/dashboard/qr",
  "/dashboard/qr/:id",
];

// change logic so pages in array are ONLY ones allowed without a cookie 😎

// this will only go so far.. consider making a function that saves each new nextURL.pathname to the signed in pages and saves that information to the database

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
