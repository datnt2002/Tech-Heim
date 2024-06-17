import { Modal } from "antd";

import AuthTab from "../../molecules/tabs";

type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthModal = ({ open, setOpen }: ModalProps) => {
  return (
    <>
      <Modal
        className="max-w-[600px]"
        title={
          <img
            src="/assets/images/logo_text.svg"
            className="mx-auto block md:hidden"
          />
        }
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
      >
        <AuthTab />
      </Modal>
    </>
  );
};

export default AuthModal;
