import { Checkbox, Form, FormInstance, FormProps, Input, Select } from "antd";
type FieldType = {
  fullName?: string;
  phone?: string;
  address?: string;
  city?: string;
  region?: string;
  postal?: string;
  commit?: string;
  recipient?: string;
  rePhone?: string;
};
const AddressForm = ({ form }: { form: FormInstance }) => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  return (
    <Form form={form} initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item<FieldType>
        name="fullName"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input size="large" placeholder="Full name" />
      </Form.Item>
      <Form.Item<FieldType>
        name="phone"
        rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <Input size="large" placeholder="Phone number" />
      </Form.Item>
      <Form.Item<FieldType>
        name="address"
        rules={[{ required: true, message: "Please input your address!" }]}
      >
        <Input size="large" placeholder="Street name and house number" />
      </Form.Item>
      <div className="flex gap-4">
        <Form.Item<FieldType>
          name="city"
          rules={[{ required: true, message: "Please input your city!" }]}
          className="flex-1"
        >
          <Input size="large" placeholder="City" />
        </Form.Item>
        <Form.Item<FieldType>
          name="region"
          rules={[{ required: true, message: "Please input your region!" }]}
          className="flex-1"
        >
          <Select
            size="large"
            placeholder="Select region"
            options={[
              { value: "eu", label: "Europe" },
              { value: "us", label: "United States" },
              { value: "na", label: "North America" },
            ]}
          />
        </Form.Item>
      </div>
      <Form.Item<FieldType>
        name="postal"
        rules={[{ required: true, message: "Please input your postal code!" }]}
      >
        <Input size="large" placeholder="Postal code" />
      </Form.Item>
      <Form.Item<FieldType> name="commit" valuePropName="checked">
        <Checkbox>I am the recipient of my order</Checkbox>
      </Form.Item>
      <Form.Item<FieldType>
        name="recipient"
        rules={[{ required: true, message: "Please input name!" }]}
      >
        <Input size="large" placeholder="recipient name" />
      </Form.Item>
      <Form.Item<FieldType>
        name="rePhone"
        rules={[{ required: true, message: "Please input phone!" }]}
      >
        <Input size="large" placeholder="Phone number" />
      </Form.Item>
    </Form>
  );
};

export default AddressForm;
