import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./index.css";
import MainLayout from "./layouts";
import LandingPage from "./pages/landing";
import { Blog } from "./pages/blog";
import Products from "./pages/product/products";
import { DetailBlog } from "./pages/detailblog";
import Breadcrumb from "./components/atoms/breadcrumb";
import Cart from "./pages/cart";
import CheckoutLayout from "./layouts/CheckoutLayout";

const LayoutWithBreadCrumb = () => {
  return (
    <div className="mx-28 mt-6">
      <Breadcrumb className="mb-10" />
      <Outlet />
    </div>
  );
};

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
              <Route path="/blog/:id" element={<DetailBlog />} />
              <Route path="/products" element={<Products />}>
                <Route path="/products/:name" element={<Products />} />
              </Route>
            </Route>
            <Route path="/" element={<CheckoutLayout />}>
              <Route path="/cart" element={<Cart />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
