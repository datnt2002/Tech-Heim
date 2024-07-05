import { Modal } from "antd";

type Props = {
  title: string;
  message?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children?: React.ReactNode;
};

const SuccessModal = ({
  title,
  message,
  isOpen,
  setIsOpen,
  children,
}: Props) => {
  return (
    <Modal
      className="max-w-[500px]"
      centered
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={false}
    >
      <div className="text-center mb-12 mx-6 mt-8">
        <div className="rounded-full shadow-lg w-fit mx-auto mb-4">
          <img
            src="/assets/icons/essential/success_icon.svg"
            alt=""
            className="px-9 py-10"
          />
        </div>

        <h3 className="text-[32px] text-success font-inter">{title}</h3>
        <p className="text-gray-505050 text-lg mt-4 px-5">{message}</p>
        {children}
      </div>
    </Modal>
  );
};

export default SuccessModal;
