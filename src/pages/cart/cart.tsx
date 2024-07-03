import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

import ListProduct from "../../components/molecules/product/ListProduct";
import PaymentCard from "../../components/molecules/payment/PaymentCard";
import CardCart from "../../components/atoms/cards/CardCart";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems, newProducts } = useSelector(
    (state: RootState) => state.product
  );

  const filterCartItems = cartItems?.filter((item) => {
    return item.quantity > 0;
  });

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 basis-7/12">
          {filterCartItems?.map((item) => {
            return (
              <CardCart
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                color={item.color}
                image={item.image}
              />
            );
          })}
        </div>
        <div className="basis-4/12">
          <PaymentCard
            buttonLabel="Proceed to checkout"
            href="/checkout"
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
        <ListProduct productList={newProducts} className="grid-cols-4" />
      </div>
    </div>
  );
};

export default Cart;
