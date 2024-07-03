import { Button, Divider } from "antd";
import Step from "../../components/atoms/step";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { CardCart } from "../../components/atoms/cards";
import ListProduct from "../../components/molecules/product/ListProduct";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems, newProducts } = useSelector(
    (state: RootState) => state.product
  );

  const filterCartItems = cartItems?.filter((item) => {
    return item.quantity > 0;
  });

  const total = filterCartItems?.reduce((res, curr) => {
    return res + curr.price * curr.quantity;
  }, 0);
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
        <div className="flex flex-col basis-4/12 h-fit gap-4 border border-gray-EDEDED rounded-lg px-6 py-4 bg-white   ">
          <h4 className="font-semibold font-inter text-2xl ">
            Payment Details
          </h4>
          <div>
            <p className="flex justify-between text-sm ">
              <span className="text-gray-717171">Subtotal</span>
              <span className="text-gray-444444">$519.52</span>
            </p>

            <p className="flex justify-between text-sm ">
              <span className="text-gray-717171">Discount</span>
              <span className="text-gray-444444">$519.52</span>
            </p>
            <p className="flex justify-between text-sm ">
              <span className="text-gray-717171">Shipment cost</span>
              <span className="text-gray-444444">$519.52</span>
            </p>

            <Divider className="my-3" />
            <h6 className="flex justify-between text-gray-2D2D2D font-semibold">
              <span>Grand Total</span>
              <span>$519.52</span>
            </h6>
          </div>
          <Button size="large" type="primary">
            Proceed to checkout
          </Button>
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
