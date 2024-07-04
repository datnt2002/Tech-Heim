import { Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import PaymentCard from "../../components/molecules/payment/PaymentCard";
import InputFormField from "../../components/atoms/formField/InputFormField";
import RadioFormField from "../../components/atoms/formField/RadioFormField";
import { useNavigate } from "react-router-dom";
import OrderList from "../../components/organisms/order/OrderList";
import Step from "../../components/atoms/step";
import { useState } from "react";

const Checkout = () => {
  const { cartItems } = useSelector((state: RootState) => state.product);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [shipCost, setShipCost] = useState(0);

  return (
    <>
      <div className="max-w-lg mx-auto mb-12">
        <Step
          current={1}
          iconCart={<img src="/assets/icons/shopping/cart_finish_icon.svg" />}
          iconCheckout={
            <img src="/assets/icons/shopping/checkout_active_icon.svg" />
          }
          iconPayment={
            <img src="/assets/icons/shopping/payment_wait_icon.svg" />
          }
        />
      </div>
      <div className="flex px-20 gap-6 mb-14">
        <div className="basis-3/5">
          <div className=" flex flex-col border gap-8 border-gray-CBCBCB rounded-lg py-6 px-8">
            <InputFormField
              label="User"
              value={currentUser?.fullName}
              disable
            />
            <InputFormField
              label="Ship to"
              value="HubSpot, 25 First Street, Cambridge MA 02141, United States"
              disable
              icon={
                <img src="/assets/icons/email/edit_icon.svg" className="w-5" />
              }
            />
            <RadioFormField
              setValue={setShipCost}
              value={shipCost}
              label="Shiping Method"
            />
          </div>
          <Button
            size="large"
            className="text-primary"
            type="text"
            onClick={() => navigate("/cart")}
          >
            Return to cart
          </Button>
        </div>
        <div className="basis-2/5">
          <PaymentCard
            shipCost={shipCost}
            buttonLabel="Continue to pay"
            href="/payment"
            children={<OrderList cartItems={cartItems} />}
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
