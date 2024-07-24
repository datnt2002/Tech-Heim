import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import Header from "../components/molecules/header";
import Footer from "../components/molecules/footer";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Suspense>
          <Outlet />
        </Suspense>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
