import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { SignUpThunk } from "../../../../redux/thunk/authThunk";
import { signUp } from "../../../../services/auth.service";

type FieldType = {
  fullName: string;
  email: string;
  password: string;
  agree: boolean;
};

const SignupForm = () => {
  const dispatch = useDispatch();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    if (values.agree) {
      signUp({
        email: values.email,
        fullName: values.fullName,
        password: values.password,
      });
    }
  };
  return (
    <>
      <h2 className="mt-4 text-center mb-5">Create your account</h2>
      <Form initialValues={{}} onFinish={onFinish}>
        <Form.Item<FieldType>
          name="fullName"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            size="large"
            prefix={
              <img src="/assets/icons/user_icon.svg" className="h-4 mr-2" />
            }
            placeholder="Full Name"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            size="large"
            prefix={
              <img src="/assets/icons/email_icon.svg" className="h-4 mr-2" />
            }
            placeholder="E-mail"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            iconRender={(visible) => {
              return visible ? (
                <img src="/assets/icons/eye_visible.svg" />
              ) : (
                <img src="/assets/icons/eye_unvisible_icon.svg" />
              );
            }}
            size="large"
            prefix={
              <img src="/assets/icons/password_icon.svg" className="h-4 mr-2" />
            }
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item<FieldType> name="agree" valuePropName="checked">
          <Checkbox className="text-gray-717171">
            I agree to all{" "}
            <span className="text-primary">Terms & Conditions</span>
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
