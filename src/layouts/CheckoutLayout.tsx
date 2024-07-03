import Step from "../components/atoms/step";
import { Outlet } from "react-router-dom";

const CheckoutLayout = () => {
  return (
    <div className="mx-28">
      <div className="mt-10 mb-12">
        <Step />
      </div>
      <Outlet />
    </div>
  );
};

export default CheckoutLayout;
