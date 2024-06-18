import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./index.css";
import MainLayout from "./layouts";
import Banner from "./components/molecules/banner";
import CategoryHomeList from "./components/molecules/categoryList";
import { SaleSectionCard } from "./components/atoms/cards";
import { ProductSale } from "./components/molecules/product";

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
          <Route
            path="/"
            element={
              <MainLayout>
                <Banner />
                <CategoryHomeList />
                <ProductSale />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
