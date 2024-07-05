import { Button, DatePicker, Form, FormProps, Input, Modal } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { addCreditCardThunk } from "../../../redux/slice/authSlice";
import { setModalState } from "../../../redux/slice/modalSlice";

type FieldType = {
  code: string;
  name: string;
  expires: string;
  cvv: string;
};
type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
const AddNewCardModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch(
      addCreditCardThunk({
        name: values.name,
        code: values.code,
        expires: values.expires,
      })
    );
    dispatch(
      setModalState({
        key: "chooseCardModal",
        isOpen: false,
      })
    );
    dispatch(
      setModalState({
        key: "addNewCardModal",
        isOpen: false,
      })
    );
  };

  const [form] = Form.useForm();

  return (
    <Modal
      className="max-w-[800px]"
      title={
        <h4 className="text-2xl text-gray-444444">Add your payment method</h4>
      }
      centered
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={() => (
        <div className="flex gap-2">
          <Button
            size="large"
            className="flex-1 border-2 border-primary text-primary"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            size="large"
            className="flex-1"
            type="primary"
            htmlType="submit"
            onClick={() => form.submit()}
          >
            Save
          </Button>
        </div>
      )}
    >
      <div className="flex justify-between mb-6">
        <div>
          <p>Credit or debit cards</p>
          <p>Tech Heim accepts major credit and debit cards.</p>
        </div>
        <div className="flex">
          <img src="/assets/icons/delivery/america.svg" className="w-10" />
          <img src="/assets/icons/delivery/visa.svg" className="w-10" />
          <img src="/assets/icons/delivery/master_card.svg" className="w-10" />
        </div>
      </div>
      <Form form={form} initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item<FieldType>
          name="code"
          rules={[
            { required: true, message: "Please input your card number!" },
          ]}
        >
          <Input type="number" size="large" placeholder="Card number" />
        </Form.Item>
        <Form.Item<FieldType>
          name="name"
          rules={[
            { required: true, message: "Please input your name on card!" },
          ]}
        >
          <Input size="large" placeholder="Name on card" />
        </Form.Item>
        <div className="flex gap-6">
          <Form.Item<FieldType>
            name="expires"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your expires time!" },
            ]}
          >
            <DatePicker size="large" picker="month" className="w-full" />
          </Form.Item>
          <Form.Item<FieldType>
            className="flex-1"
            name="cvv"
            rules={[{ required: true, message: "Please input cvv!" }]}
          >
            <Input type="number" size="large" placeholder="CVV" />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default AddNewCardModal;
