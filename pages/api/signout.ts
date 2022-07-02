import cookie from "cookie";

export default async (req, res) => {
  /* remove cookies from request header */
  res.setHeader("Set-Cookie", [
    cookie.serialize("INTELLI_ACCESS_TOKEN", "hello", {
      maxAge: -1,
      path: "/",
    }),
  ]);

  res.writeHead(302, { Location: "/" });
  res.end();
};
