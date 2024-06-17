import { Tabs, TabsProps } from "antd";
import { LoginForm, SignupForm } from "../form/auth";
import AuthFormFooter from "../../atoms/formFooter";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Log in",
    children: (
      <>
        <LoginForm />
        <AuthFormFooter
          href={"/"}
          hrefLabel="sign up"
          message="Don’t have an account ?"
          title="Or Log in With"
        />
      </>
    ),
  },
  {
    key: "2",
    label: "Create Account",
    children: (
      <>
        <SignupForm />
        <AuthFormFooter
          href={"/"}
          hrefLabel="Sign in"
          message="Already have an account ?"
          title="Or Sign Up With"
        />
      </>
    ),
  },
];

const AuthTab = () => {
  return <Tabs centered defaultActiveKey="1" items={items} />;
};

export default AuthTab;
