import { Modal } from "antd";
type Props = {
  title: string;
  message?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const ErrorModal = ({ title, message, isOpen, setIsOpen }: Props) => {
  return (
    <Modal
      className="max-w-[600px]"
      centered
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={false}
    >
      <div className="text-center mb-12 mx-6 mt-8">
        <div className="rounded-full shadow-lg w-fit mx-auto mb-4">
          <img src="/assets/icons/essential/error_icon.svg" alt="" />
        </div>

        <h3 className="text-[32px] text-error font-inter">{title}</h3>
        <p className="text-gray-505050 text-lg mt-4 px-5">{message}</p>
      </div>
    </Modal>
  );
};

export default ErrorModal;
