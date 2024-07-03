import { useSelector } from "react-redux";
import OrderCard from "../../components/atoms/cards/OrderCard";
import PaymentCard from "../../components/molecules/payment/PaymentCard";
import { RootState } from "../../redux/store";
import { Button, Input } from "antd";

type Props = {};

const Checkout = (props: Props) => {
  const { cartItems } = useSelector((state: RootState) => state.product);
  return (
    <div className="flex px-20">
      <div className="basis-3/5">
        <div className="border-gray-505050 rounded-lg py-6 px-8"></div>
      </div>
      <div className="basis-2/5">
        <PaymentCard
          buttonLabel="Continue to pay"
          href="/payment"
          children={
            <div>
              <h4 className="font-inter font-semibold text-2xl mb-4">
                Your Order
              </h4>

              {cartItems.map((item) => {
                return (
                  <OrderCard
                    color={item.color}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    key={item.id}
                    salePrice={item?.salePrice}
                  />
                );
              })}
              <div className="flex gap-1 pt-6">
                <Input
                  className="basis-2/3 border-gray-B4B4B4"
                  size="large"
                  placeholder="discount code"
                />
                <Button
                  className="basis-1/3 text-primary border-primary border-2"
                  size="large"
                >
                  Apply
                </Button>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Checkout;
