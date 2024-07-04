import { Outlet } from "react-router-dom";

const CheckoutLayout = () => {
  return (
    <div className="mx-28">
      <div className="mt-10 mb-14">
        <Outlet />
      </div>
    </div>
  );
};

export default CheckoutLayout;
