import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { setModalState } from "../redux/slice/modalSlice";
import { useEffect } from "react";

const CheckoutLayout = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      dispatch(
        setModalState({
          key: "authModal",
          isOpen: true,
        })
      );
      navigate("/");
    }
  }, [token, dispatch, navigate]);

  return (
    <div className="mx-6 md:mx-28">
      <div className="mt-10 mb-14">
        <Outlet />
      </div>
    </div>
  );
};

export default CheckoutLayout;
