import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

// This is a place for all of the helpers I will use to help me with athentication.

// vaidateRoute IS MIDDLEWARE
// This first function is a higher order function that I will use as middleware to protect my API routes, So whatever API routes we want to protected we will wrap in this higher order function and we can use this function as a gatekeeper to access our API route.
export const validateRoute = (handler) => {
  // * Handler is a function that takes a request and a response.
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.INTELLI_ACCESS_TOKEN;
    // This function checks the cookie that is always sent up.
    // We are mandating that the cookie is sent up to use the API route, if there is no cookie then there is no access.
    if (token) {
      let user;

      try {
        // Decode the jwt and turn it into a javascript object and grab the id property from that.
        const { id } = jwt.verify(token, "hello");
        // Go to the database find a user with that id
        user = await prisma.user.findUnique({
          where: { id },
        });
        // If there is no match we throw the error not a real user
        if (!user) {
          throw new Error("Not real user");
        }
      } catch (e) {
        // If there is any errors we throw Not Authorized
        res.status(401);
        res.json({ error: "Not Authorized" });
        return;
      }
      // If the token id matches the user, we return by calling the original handler function (E.G  our api serverless function me.ts)
      return handler(req, res, user);
    }
    // If there is no token, we throw a 401 with an error message of Not Authorized.
    res.status(401);
    res.json({ error: "Not Authorized" });
  };
};


