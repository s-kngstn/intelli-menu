import jwt from "jsonwebtoken";

export const validateToken = (token) => {
  const user = jwt.verify(token, "hello");
  return user;
};
