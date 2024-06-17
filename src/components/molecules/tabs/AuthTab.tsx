import { Button, Divider, Tabs, TabsProps } from "antd";
import { LoginForm, SignupForm } from "../form/auth";
import { Link } from "react-router-dom";

const SocialButtonAuth = () => {
  return (
    <>
      <Divider plain>
        <span className="text-gray-2D2D2D">Or Log in With</span>
      </Divider>
      <div className="flex justify-between gap-6">
        <Button
          size="large"
          className="border-primary border-2 text-primary flex-1 "
        >
          <img src="/assets/icons/google_icon.svg" />
          Google
        </Button>
        <Button
          size="large"
          className="border-primary border-2 text-primary flex-1 "
        >
          <img src="/assets/icons/facebook_icon.svg" />
          Facebook
        </Button>
      </div>
      <div className="flex justify-center py-3 mt-4 gap-8">
        <p>Don’t have an account ? </p>
        <Link to="/" className="text-primary">
          sign up
        </Link>
      </div>
    </>
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Log in",
    children: (
      <>
        <LoginForm />
        <SocialButtonAuth />
      </>
    ),
  },
  {
    key: "2",
    label: "Create Account",
    children: <SignupForm />,
  },
];

const AuthTab = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />
  );
};

export default AuthTab;
