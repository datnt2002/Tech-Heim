import { Button, Modal } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const ChooseCardModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const { creditCard } = useSelector((state: RootState) => state.auth);
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
            // onClick={handleSubmitAddress}
          >
            Save
          </Button>
        </div>
      )}
    >
      <table className="w-full py-4">
        <tr className="text-center text-gray-505050 font-normal">
          <td className="w-1/2"></td>
          <td>Name on card</td>
          <td>Expires</td>
        </tr>

        {creditCard.map((card) => {
          return (
            <tr className=" bg-gray-F6F6F6 rounded-lg" key={card.id}>
              <td className="flex gap-2 py-2 px-4">
                <input
                  type="radio"
                  name="payment"
                  checked={card.selected === true}
                  className=""
                />
                <img src={card.image} className="w-8" />
                <label>{card.code}</label>
              </td>
              <td className="text-center">{card.name}</td>
              <td className="text-center">{card.expires}</td>
            </tr>
          );
        })}
      </table>
      <div className="flex justify-between items-center cursor-pointer bg-gray-F6F6F6 rounded-lg  py-2 px-4 mt-2">
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
