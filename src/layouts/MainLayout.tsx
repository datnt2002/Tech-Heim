import { Outlet } from "react-router-dom";

import Header from "../components/molecules/header";
import Footer from "../components/molecules/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
