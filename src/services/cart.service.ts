import axiosClient from './api.service'

export const addToCartAPI = (productID: number) => {
  const token = localStorage.getItem('token')
  const body = { productID }
  return axiosClient
    .post(`cart/add`, body, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      const { data, status } = res
      return { data, status }
    })
    .catch((err) => err)
}

export const getCartAPI = () => {
  const token = localStorage.getItem('token')
  return axiosClient
    .get('cart/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      const { data, status } = res
      return { data, status }
    })
    .catch((err) => err)
}

export const deleteCartItemAPI = (cartItemID: number) => {
  const token = localStorage.getItem('token')
  return axiosClient
    .delete(`cart/delete/${cartItemID}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      const { data, status } = res
      return { data, status }
    })
    .catch((err) => err)
}

export const deleteCartAPI = () => {
  const token = localStorage.getItem('token')
  return axiosClient
    .delete('cart/delete/all', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      const { data, status } = res
      return { data, status }
    })
    .catch((err) => err)
}

export const updateQuantityAPI = ({
  cartItemID,
  quantity
}: {
  cartItemID: number
  quantity: number
}) => {
  const token = localStorage.getItem('token')
  const body = { quantity }
  return axiosClient
    .patch(`cart/update/${cartItemID}`, body, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      const { data, status } = res
      return { data, status }
    })
    .catch((err) => err)
}
