import fetcher from "./fetcher";

export const authSignIn = (
  mode: "signin",
  body: { email: string; password: string }
) => {
  return fetcher(`/${mode}`, body);
};

export const authSignUp = (
  mode: "signup",
  body: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
) => {
  return fetcher(`/${mode}`, body);
};
