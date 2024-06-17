import { Tabs, TabsProps } from "antd";
import { LoginForm, SignupForm } from "../form/auth";

const AuthTab = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Log in",
      children: <LoginForm />,
    },
    {
      key: "2",
      label: "Create Account",
      children: <SignupForm />,
    },
  ];

  return (
    <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />
  );
};

export default AuthTab;
