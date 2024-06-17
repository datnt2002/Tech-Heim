import { useState } from "react";
import { Button, Modal } from "antd";

import AuthTab from "../../molecules/tabs";

const AuthModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Vertically centered modal dialog
      </Button>
      <Modal
        title={<img src="/assets/images/logo_text.svg" className="mx-auto" />}
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={false}
      >
        <AuthTab />
      </Modal>
    </>
  );
};

export default AuthModal;
