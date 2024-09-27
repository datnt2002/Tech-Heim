import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import ListProduct from "../../components/molecules/product/ListProduct";
import PaymentCartCard from "../../components/molecules/payment/PaymentCartCard";
import CardCart from "../../components/atoms/cards/cart/CardCart";
import Step from "../../components/atoms/step";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { newProducts } = useSelector((state: RootState) => state.product);

  const { currentUser } = useSelector((state: RootState) => state.auth);
  const cart = currentUser?.cart;
  const navigate = useNavigate();

  return (
    <>
      <div className="max-w-lg mx-auto mb-12">
        <Step
          current={0}
          iconCart={<img src="/assets/icons/shopping/cart_active_icon.svg" />}
          iconCheckout={
            <img src="/assets/icons/shopping/checkout_wait_icon.svg" />
          }
          iconPayment={
            <img src="/assets/icons/shopping/payment_wait_icon.svg" />
          }
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-3 basis-7/12">
          {cart?.map((item) => {
            return <CardCart cartItem={item} />;
          })}
        </div>
        <div className="basis-4/12  mt-6 md:mt-0">
          <PaymentCartCard
            buttonLabel="Proceed to checkout"
            onClick={() => navigate("/checkout")}
            className="gap-4"
            children={
              <h4 className="font-semibold font-inter text-2xl ">
                Payment Details
              </h4>
            }
          />
        </div>
      </div>

      {/* suggest */}
      <div className="mb-14 mt-12">
        <h5 className="font-semibold text-xl mb-6">
          Customers who viewed items in your browsing history also viewed
        </h5>
        <ListProduct
          productList={newProducts}
          className="grid-cols-2 md:grid-cols-4 "
        />
      </div>
    </>
  );
};

export default Cart;
