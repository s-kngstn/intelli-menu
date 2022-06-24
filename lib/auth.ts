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
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }
) => {
  return fetcher(`/${mode}`, body);
};
