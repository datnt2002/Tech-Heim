import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

import { AppDispatch, RootState } from "../../redux/store";
import { setModalState } from "../../redux/slice/modalSlice";
import { getCreditCardThunk } from "../../redux/slice/authSlice";

import PaymentCard from "../../components/molecules/payment/PaymentCard";
import OrderList from "../../components/organisms/order/OrderList";
import Step from "../../components/atoms/step";
import InputFormField from "../../components/atoms/formField/InputFormField";
import MapModal from "../../components/organisms/modal/MapModal";
import ChooseCardModal from "../../components/organisms/modal/ChooseCardModal";
import AddNewCardModal from "../../components/organisms/modal/AddNewCardModal";
import { SuccessModal } from "../../components/organisms/modal";
import { formatNumber } from "../../utils/formatNumber";

const Payment = () => {
  const cartItems = useSelector((state: RootState) => state.product.cartItems);
  const { mapModal, chooseCardModal, addNewCardModal, successModal } =
    useSelector((state: RootState) => state.appModal);
  const { selectedCreditCard, currentUser } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCreditCardThunk());
  }, [dispatch]);

  const handleOpenMapModal = (isOpen: boolean) => {
    dispatch(
      setModalState({
        key: "mapModal",
        isOpen: isOpen,
      })
    );
  };

  const handleOpenChooseModal = (isOpen: boolean) => {
    dispatch(
      setModalState({
        key: "chooseCardModal",
        isOpen: isOpen,
      })
    );
  };
  const handleOpenAddModal = (isOpen: boolean) => {
    dispatch(
      setModalState({
        key: "addNewCardModal",
        isOpen: isOpen,
      })
    );
  };

  const handleOpenSuccessModal = (isOpen: boolean) => {
    dispatch(
      setModalState({
        key: "successModal",
        isOpen: isOpen,
      })
    );
  };

  const [selectedPayment, setSelectedPayment] = useState("cr");
  const [grandTotal, setGrandTotal] = useState(0);
  const handlePaymentChange = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };
  return (
    <>
      <div className="max-w-lg mx-auto mb-12">
        <Step
          current={2}
          iconCart={<img src="/assets/icons/shopping/cart_finish_icon.svg" />}
          iconCheckout={
            <img src="/assets/icons/shopping/checkout_finish_icon.svg" />
          }
          iconPayment={
            <img src="/assets/icons/shopping/payment_active_icon.svg" />
          }
        />
      </div>
      <div className="flex flex-col lg:flex-row px-6 lg:px-20 gap-6 mb-14">
        <div className="basis-3/5">
          <div className=" flex flex-col border gap-2 border-gray-CBCBCB bg-white rounded-lg py-6 px-8">
            <h5 className="text-xl mb-2 font-semibold">Payment</h5>
            <div className="flex gap-2">
              <div
                className="bg-gray-F6F6F6 rounded-lg py-4 px-2 flex flex-1 justify-between"
                onClick={() => handlePaymentChange("cr")}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedPayment === "cr"}
                    readOnly
                  />
                  <label>Credit Cards</label>
                </div>
                <div className="flex gap-2">
                  <img src={selectedCreditCard?.image} className="w-14" />
                  <img
                    src="/assets/icons/email/edit_icon.svg"
                    className="w-5 cursor-pointer"
                    onClick={() => {
                      handleOpenChooseModal(true);
                    }}
                  />
                </div>
              </div>
              <button
                className="p-3 bg-primary-25 rounded-lg"
                onClick={() => handleOpenAddModal(true)}
              >
                <span className="p-2 text-primary text-xl">+</span>
              </button>
            </div>
            <div
              className="bg-gray-F6F6F6 rounded-lg py-4 px-2 "
              onClick={() => handlePaymentChange("pp")}
            >
              <input
                type="radio"
                name="payment"
                checked={selectedPayment === "pp"}
                className="mr-2"
                readOnly
              />
              <label>PayPal</label>
            </div>
            <InputFormField
              label="Billing address"
              value="Same as shipping address"
              disable
              icon={
                <img
                  src="/assets/icons/email/edit_icon.svg"
                  className="w-5 cursor-pointer"
                  onClick={() => handleOpenMapModal(true)}
                />
              }
            ></InputFormField>
          </div>
          <Button
            size="large"
            className="text-primary"
            type="text"
            onClick={() => navigate("/checkout")}
          >
            Return to checkout
          </Button>
        </div>
        <div className="basis-2/5">
          <PaymentCard
            setGrandTotal={setGrandTotal}
            buttonLabel="Place order"
            onClick={() => handleOpenSuccessModal(true)}
            children={<OrderList cartItems={cartItems} />}
          />
        </div>
      </div>
      {mapModal && (
        <MapModal isOpen={mapModal} setIsOpen={handleOpenMapModal} />
      )}
      {chooseCardModal && (
        <ChooseCardModal
          isOpen={chooseCardModal}
          setIsOpen={handleOpenChooseModal}
        />
      )}
      {addNewCardModal && (
        <AddNewCardModal
          isOpen={addNewCardModal}
          setIsOpen={handleOpenAddModal}
        />
      )}
      {successModal && (
        <SuccessModal
          title="Successful Payment"
          isOpen={successModal}
          setIsOpen={handleOpenSuccessModal}
          children={
            <div className="flex flex-col gap-4">
              <p className="text-base text-gray-717171 flex justify-between">
                <span>Payment type</span>
                <span>Net Banking</span>
              </p>
              <p className="text-base text-gray-717171 flex justify-between">
                <span>Phone number</span>
                <span>+12345678910</span>
              </p>
              <p className="text-base text-gray-717171 flex justify-between">
                <span>Email</span>
                <span>{currentUser?.email}</span>
              </p>
              <p className="text-base text-gray-717171 flex justify-between">
                <span>Transaction id</span>
                <span>2345678910</span>
              </p>
              <p className="text-base font-semibold text-gray-717171 flex justify-between">
                <span>Amount Paid</span>
                <span>${formatNumber(grandTotal)}</span>
              </p>
              <Button
                onClick={() => handleOpenSuccessModal(false)}
                className="w-1/2 self-end"
                type="primary"
                size="large"
              >
                Order Status
              </Button>
            </div>
          }
        />
      )}
    </>
  );
};

export default Payment;
