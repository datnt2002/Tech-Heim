import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";

import { SignUpThunk } from "../../../../redux/thunk/authThunk";
import { AppDispatch } from "../../../../redux/store";

type FieldType = {
  fullName: string;
  email: string;
  password: string;
  agree: boolean;
};

const SignupForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (values?.agree) {
      dispatch(
        SignUpThunk({
          email: values?.email,
          fullName: values?.fullName,
          password: values?.password,
        })
      );
    }
  };

  return (
    <>
      <h2 className="mt-4 text-center mb-5">Create your account</h2>
      <Form form={form} onFinish={onFinish}>
        <Form.Item<FieldType>
          name="fullName"
          rules={[
            { required: true, message: "Please input your fullName!" },
            {
              max: 20,
              message: "Please input full name less than 20 characters",
            },
            {
              min: 3,
              message: "Please input full name more than 3 characters",
            },
          ]}
        >
          <Input
            size="large"
            prefix={
              <img
                src="/assets/icons/user/user_icon.svg"
                className="h-4 mr-2"
              />
            }
            placeholder="Full Name"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              min: 3,
              message: "Please input email more than 3 characters",
            },
            {
              type: "email",
              message: "Please input valid email",
            },
          ]}
        >
          <Input
            size="large"
            prefix={
              <img
                src="/assets/icons/email/email_icon.svg"
                className="h-4 mr-2"
              />
            }
            placeholder="E-mail"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              min: 6,
              message: "Please input password more than 3 characters",
            },
          ]}
        >
          <Input.Password
            iconRender={(visible) => {
              return visible ? (
                <img src="/assets/icons/security/eye_visible.svg" />
              ) : (
                <img src="/assets/icons/security/eye_unvisible_icon.svg" />
              );
            }}
            size="large"
            prefix={
              <img
                src="/assets/icons/security/password_icon.svg"
                className="h-4 mr-2"
              />
            }
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="agree"
          valuePropName="checked"
          rules={[
            { required: true, message: "Please agree our Terms & Conditions" },
          ]}
        >
          <Checkbox className="text-gray-717171">
            I agree to all
            <span className="text-primary ml-1">Terms & Conditions</span>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignupForm;
