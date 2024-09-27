import axiosClient from './api.service'

export const getProductByCatAPI = ({
  category,
  query
}: {
  category: string
  query: { [key: string]: string }
}) => {
  return axiosClient
    .get(`product/category/${category}`, { params: query })
    .then((res) => {
      const { data, status } = res
      return { data, status }
    })
    .catch((err) => err)
}

export const getProductByBrandAPI = (brand: string) => {
  return axiosClient
    .get(`product/brand/${brand}`)
    .then((res) => {
      const { data, status } = res
      return { data, status }
    })
    .catch((err) => err)
}

export const getSpecFilterAPI = (category: string) => {
  return axiosClient
    .get(`product/spec/${category}`)
    .then((res) => {
      const { data, status } = res
      return { data, status }
    })
    .catch((err) => err)
}

export const getProductDetailAPI = (productID: number) => {
  return axiosClient.get(`product/detail/${productID}`).then((res) => {
    const { data, status } = res
    return { data, status }
  })
}
