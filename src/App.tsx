import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./index.css";
import MainLayout from "./layouts";
import LandingPage from "./pages/landing";
import { Blog } from "./pages/blog";
import BlogDetail from "./components/detailblog/DetailBlog";

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
            <Route path="/blog" element={<Blog />} />
          </Route>
          {/* 
          <Route
            path="/blog/:title"
            element={
              <MainLayout>
                <BlogDetail />
              </MainLayout>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
