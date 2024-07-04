import PaymentCard from "../../components/molecules/payment/PaymentCard";
import OrderList from "../../components/organisms/order/OrderList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Step from "../../components/atoms/step";

type Props = {};

const Payment = (props: Props) => {
  const { cartItems } = useSelector((state: RootState) => state.product);

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
      <div className="flex px-20 gap-6 mb-14">
        <div className="basis-3/5">
          <div className=" flex flex-col border gap-8 border-gray-CBCBCB rounded-lg py-6 px-8"></div>
        </div>
        <div className="basis-2/5">
          <PaymentCard
            buttonLabel="Place order"
            href="/payment"
            children={<OrderList cartItems={cartItems} />}
          />
        </div>
      </div>
    </>
  );
};

export default Payment;
