import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./index.css";
import MainLayout from "./layouts";
import LandingPage from "./pages/landing";
import { Blog } from "./pages/blog";
import BlogDetail from "./components/detailblog/DetailBlog";
import Products from "./pages/product/products";
import Breadcrumb from "./components/atoms/breadcrumb";

const LayoutWithBreadCrumb = () => {
  return (
    <div className="mx-28 mt-6">
      <Breadcrumb className="mb-10" />
      <Outlet />
    </div>
  );
};
import { DetailBlog } from "./pages/detailblog";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0C68F4",
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/" element={<LayoutWithBreadCrumb />}>
              <Route path="/blog" element={<Blog />} />
              <Route path="/products" element={<Products />}>
                <Route path="/products/:name" element={<Products />} />
              </Route>
            </Route>
          </Route>
          {/* 
          <Route
            path="/blog/:title"
            element={
              <MainLayout>
                <DetailBlog />
              </MainLayout>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
