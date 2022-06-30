import AuthForm from "../src/components/auth-components/authForm";

const Signin = () => {
  return <AuthForm mode="signin" />;
};

Signin.authPage = true;

export default Signin;
