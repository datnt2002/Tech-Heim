import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { lazy, useEffect } from 'react'

import './index.css'
import MainLayout from './layouts'
const LandingPage = lazy(() => import('./pages/landing'))
const Blog = lazy(() => import('./pages/blog'))
const Products = lazy(() => import('./pages/product/products'))
const DetailBlog = lazy(() => import('./pages/detailblog'))
const Breadcrumb = lazy(() => import('./components/atoms/breadcrumb'))
const DetailProduct = lazy(() => import('./pages/detailproduct/[productId]'))
const Cart = lazy(() => import('./pages/cart'))
import CheckoutLayout from './layouts/CheckoutLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  cleanUpServiceWorker,
  initServiceWorker,
  receiveNotification
} from './utils/serviceWorkerUtils'
const Complete = lazy(() => import('./pages/redirect/Complete'))

const Checkout = lazy(() => import('./pages/cart/checkout'))
const Payments = lazy(() => import('./pages/cart/payment'))
const ProductFilterBrand = lazy(
  () => import('./pages/product/productFilterBrand')
)
const DetailUser = lazy(() => import('./pages/account-detail/[accountId]'))
const AccountDetailLayout = lazy(() => import('./layouts/AccountDetailLayout'))
const PaymentInstallmentsPage = lazy(
  () => import('./pages/account-detail/[paymentCardUserId]')
)
const InstalmentsDetail = lazy(
  () => import('./pages/account-detail/[instalmentUserId]')
)
const OrderDetailPage = lazy(
  () => import('./pages/account-detail/[orderDetailId]')
)
const OrderDetailID = lazy(
  () => import('./pages/account-detail/order/[orderId]')
)
const NotFoundPage = lazy(() => import('./pages/404NotFound/notFound'))

const LayoutWithBreadCrumb = () => {
  return (
    <div className='mx-28 mt-6'>
      <Breadcrumb className='mb-10' />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0C68F4'
        }
      }}
    >
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/' element={<LayoutWithBreadCrumb />}>
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog/:id' element={<DetailBlog />} />
              <Route path='/products' element={<Products />}></Route>
              <Route
                path='/products/categories/:categoryId'
                element={<ProductFilterBrand />}
              />
              <Route path='/products/:id' element={<DetailProduct />} />
              <Route path='/' element={<AccountDetailLayout />}>
                <Route path='/detail' element={<DetailUser />}></Route>
                <Route
                  path='/paymentinstallments'
                  element={<PaymentInstallmentsPage />}
                />
                <Route path='/order' element={<OrderDetailPage />}></Route>
                <Route
                  path='/order/:orderId'
                  element={<OrderDetailID />}
                />{' '}
                <Route path='/instalments' element={<InstalmentsDetail />} />
              </Route>
            </Route>

            <Route path='/' element={<CheckoutLayout />}>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/checkout' element={<Checkout />}></Route>
              <Route path='/payment/:orderId' element={<Payments />}></Route>
            </Route>
          </Route>{' '}
          <Route path='/redirect-to-homepage' element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
