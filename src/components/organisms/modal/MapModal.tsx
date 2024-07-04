import { Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setModalState } from "../../../redux/slice/modalSlice";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MapModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleConfirm = () => {
    setIsOpen(false);
    dispatch(
      setModalState({
        key: "addressModal",
        isOpen: true,
      })
    );
  };

  return (
    <Modal
      className="max-w-[800px]"
      title="Edit Address"
      centered
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={() => (
        <Button type="primary" onClick={handleConfirm}>
          Confirm and Continue
        </Button>
      )}
    >
      <div>
        <p className="text-base text-gray-717171">
          Mark the location on the map
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3144075942996!2d105.78145217503113!3d21.020102180627006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4c50a6bcf7%3A0x6a91f7f04869ae43!2sAHT%20Tech!5e0!3m2!1sen!2s!4v1720084382318!5m2!1sen!2s"
          loading="lazy"
          className="w-full h-[26rem]"
        ></iframe>
      </div>
    </Modal>
  );
};

export default MapModal;
