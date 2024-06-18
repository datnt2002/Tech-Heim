import React from "react";
import Header from "../components/molecules/header";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
