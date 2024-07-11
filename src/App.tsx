import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./index.css";
import MainLayout from "./layouts";
import LandingPage from "./pages/landing";
import { Blog } from "./pages/blog";
import Products from "./pages/product/products";
import { DetailBlog } from "./pages/detailblog";
import Breadcrumb from "./components/atoms/breadcrumb";
import DetailProduct from "./pages/detailproduct/[productId]";
import Cart from "./pages/cart";
import CheckoutLayout from "./layouts/CheckoutLayout";
import Checkout from "./pages/cart/checkout";
import Payment from "./pages/cart/payment";
import ProductFilterBrand from "./pages/product/productFilterBrand";

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
              <Route path="/products" element={<Products />}></Route>
              <Route
                path="/products/categories/:categoryId"
                element={<ProductFilterBrand />}
              />
              <Route path="/products/:id" element={<DetailProduct />} />
            </Route>

            <Route path="/" element={<CheckoutLayout />}>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/payment" element={<Payment />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
