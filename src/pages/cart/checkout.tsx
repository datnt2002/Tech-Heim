import { Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import PaymentCard from "../../components/molecules/payment/PaymentCard";
import InputFormField from "../../components/atoms/formField/InputFormField";
import RadioFormField from "../../components/atoms/formField/RadioFormField";
import { useNavigate } from "react-router-dom";
import OrderList from "../../components/organisms/order/OrderList";

const Checkout = () => {
  const { cartItems } = useSelector((state: RootState) => state.product);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  return (
    <div className="flex px-20 gap-6 mb-14">
      <div className="basis-3/5">
        <div className=" flex flex-col border gap-8 border-gray-CBCBCB rounded-lg py-6 px-8">
          <InputFormField label="User" value={currentUser?.fullName} disable />
          <InputFormField
            label="Ship to"
            value="HubSpot, 25 First Street, Cambridge MA 02141, United States"
            disable
            icon={
              <img src="/assets/icons/email/edit_icon.svg" className="w-5" />
            }
          />
          <RadioFormField label="Shiping Method" />
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
          buttonLabel="Continue to pay"
          href="/payment"
          children={<OrderList cartItems={cartItems} />}
        />
      </div>
    </div>
  );
};

export default Checkout;
