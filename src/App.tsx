import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./index.css";
import MainLayout from "./layouts";
import LandingPage from "./pages/landing";

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
                <LandingPage />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
