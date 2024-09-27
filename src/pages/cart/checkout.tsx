import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { AppDispatch, RootState } from "../../redux/store";
import { setModalState } from "../../redux/slice/modalSlice";
import { addOrderThunk } from "../../redux/slice/orderSlice";
import PaymentCartCard from "../../components/molecules/payment/PaymentCartCard";
import OrderList from "../../components/organisms/order/OrderList";
import Step from "../../components/atoms/step";
import InputFormField from "../../components/atoms/formField/InputFormField";
import MapModal from "../../components/organisms/modal/MapModal";
import AddressModal from "../../components/organisms/modal/AddressModal";
import RadioFormField from "../../components/atoms/formField/RadioFormField";
import { generateTransactionID } from "../../utils/orderUtils";
import { ProductInCart } from "../../types/Product";
import { Order } from "../../types/Order";

const Checkout = () => {
  const { shipCost } = useSelector((state: RootState) => state.product);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const cartItems = currentUser?.cart;
  const { mapModal, addressModal } = useSelector(
    (state: RootState) => state.appModal
  );

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [shipmentData, setShipmentData] = useState({
    userId: currentUser?.id || "",
    fullname: currentUser?.fullName || "",
    phonenumber: "",
    street: "",
    city: "",
    region: "",
    postalcode: "",
    recipient: "",
    rePhone: "",
    shippingMethod: shipCost?.label || "",
    shippingPrice: shipCost?.price || 0,
  });

  useEffect(() => {
    if (
      !location.pathname.startsWith("/checkout") &&
      !location.pathname.startsWith("/payment")
    ) {
      setShipmentData({
        userId: currentUser?.id || "",
        fullname: currentUser?.fullName || "",
        phonenumber: "",
        street: "",
        city: "",
        region: "",
        postalcode: "",
        recipient: "",
        rePhone: "",
        shippingMethod: "",
        shippingPrice: 0,
      });
    }
  }, [location, currentUser]);

  const handleOpenMapModal = (isOpen: boolean) => {
    dispatch(setModalState({ key: "mapModal", isOpen: isOpen }));
  };

  const handleOpenAddressModal = (isOpen: boolean) => {
    dispatch(setModalState({ key: "addressModal", isOpen: isOpen }));
  };

  const handleAddressSubmit = (address: any) => {
    setShipmentData({ ...shipmentData, ...address });
  };

  const handleShippingChange = (method: { label: string; price: number }) => {
    setShipmentData({
      ...shipmentData,
      shippingMethod: method.label,
      shippingPrice: method.price,
    });
  };

  const handleContinueToPay = () => {
    if (cartItems) {
      const transactionId = generateTransactionID();
      const totalAmount =
        cartItems.reduce((sum: number, item: ProductInCart) => {
          const price = item.salePrice ? item.salePrice : item.price;
          return sum + price * item.quantity;
        }, 0) + shipmentData.shippingPrice;

      const newOrder: Order = {
        id: transactionId,
        userId: currentUser?.id as string | number,
        fullname: shipmentData.fullname,
        street: shipmentData.street,
        city: shipmentData.city,
        region: shipmentData.region,
        postalcode: shipmentData.postalcode,
        shippingMethod: shipmentData.shippingMethod,
        shippingPrice: shipmentData.shippingPrice,
        Products: cartItems,
        totalAmount: totalAmount,
        depositAmount: 0,
        isPaid: false,
        sharedWith: [],
        payments: [],
      };

      dispatch(addOrderThunk(newOrder));
      navigate(`/payment/${transactionId}`);
    }
  };

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
      <div className="flex flex-col lg:flex-row px-6 lg:px-20 gap-6 mb-14">
        <div className="basis-3/5">
          <div className=" flex flex-col border gap-8 border-gray-CBCBCB rounded-lg py-6 px-8">
            <InputFormField
              label="User"
              value={currentUser?.fullName}
              disable
            />

            <InputFormField
              label="Ship to"
              value={
                shipmentData.street
                  ? `${shipmentData.street}, ${shipmentData.city}, ${shipmentData.region}, ${shipmentData.postalcode}`
                  : "Shipping Address"
              }
              disable
              icon={
                <img
                  src="/assets/icons/email/edit_icon.svg"
                  className="w-5 cursor-pointer"
                  onClick={() => handleOpenAddressModal(true)}
                />
              }
            ></InputFormField>

            <RadioFormField
              label="Shipping Method"
              value={shipmentData.shippingPrice}
              onShippingChange={handleShippingChange}
            />
          </div>
          <Button
            size="large"
            className="text-primary"
            type="text"
            onClick={handleContinueToPay}
          >
            Continue to pay
          </Button>
        </div>
        <div className="basis-2/5">
          <PaymentCartCard
            buttonLabel="Continue to pay"
            onClick={handleContinueToPay}
            shippingCost={shipmentData.shippingPrice}
          >
            <OrderList cartItems={cartItems || []} />
          </PaymentCartCard>
        </div>
      </div>
      {mapModal && (
        <MapModal isOpen={mapModal} setIsOpen={handleOpenMapModal} />
      )}
      {addressModal && (
        <AddressModal
          isOpen={addressModal}
          setIsOpen={handleOpenAddressModal}
          onSubmit={handleAddressSubmit}
        />
      )}
    </>
  );
};

export default Checkout;
