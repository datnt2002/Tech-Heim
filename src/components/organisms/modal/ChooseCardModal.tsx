import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { setModalState } from "../../../redux/slice/modalSlice";
import dayjs from "dayjs";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const ChooseCardModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const { creditCard } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const handleOpenAddModal = (isOpen: boolean) => {
    dispatch(
      setModalState({
        key: "addNewCardModal",
        isOpen: isOpen,
      })
    );
  };
  return (
    <Modal
      className="max-w-[800px]"
      title={<h4 className="text-2xl">Your credit and debit cards</h4>}
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
          >
            Save
          </Button>
        </div>
      )}
    >
      <table className="w-full py-4">
        <thead>
          <tr className="text-center text-gray-505050 font-normal">
            <td className="w-1/2"></td>
            <td>Name on card</td>
            <td>Expires</td>
          </tr>
        </thead>

        <tbody>
          {creditCard.map((card) => {
            return (
              <tr className=" bg-gray-F6F6F6 rounded-lg" key={card.id}>
                <td className="flex gap-2 py-2 px-4">
                  <input
                    type="radio"
                    name="payment"
                    checked={card.selected === true}
                    readOnly
                  />
                  <img src={card.image} className="w-8" />
                  <label>{card.code}</label>
                </td>
                <td className="text-center">{card.name}</td>
                <td className="text-center">
                  {dayjs(card.expires).format("MM/YY")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        onClick={() => handleOpenAddModal(true)}
        className="flex justify-between items-center cursor-pointer bg-gray-F6F6F6 rounded-lg  py-2 px-4 mt-2"
      >
        <div className="flex gap-2">
          <img
            src="/assets/icons/essential/add_circle_icon.svg"
            className="w-4"
          />
          <p>add new card</p>
        </div>
        <div className="flex">
          <img src="/assets/icons/delivery/america.svg" className="w-10" />
          <img src="/assets/icons/delivery/visa.svg" className="w-10" />
          <img src="/assets/icons/delivery/master_card.svg" className="w-10" />
        </div>
      </div>
    </Modal>
  );
};

export default ChooseCardModal;
