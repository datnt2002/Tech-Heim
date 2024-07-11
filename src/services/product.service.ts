import { ProductInCart } from "../types/Product";
import axiosClient from "./api.service";
import queryString from "query-string";
import { v4 as uuidv4 } from "uuid";
export const getCategoryAPI = () => {
  return axiosClient
    .get("product-category")
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getCartItemsAPI = () => {
  return axiosClient
    .get("cart")
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const updateQuantityCartItemsAPI = ({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) => {
  const body = { quantity };
  return axiosClient
    .patch(`cart/${id}`, body)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const deleteCartItemsAPI = (id: string) => {
  return axiosClient
    .delete(`cart/${id}`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const addToCartAPI = (data: Omit<ProductInCart, "id" | "quantity">) => {
  const body = { id: uuidv4(), quantity: 1, ...data };

  return axiosClient
    .post(`cart`, body)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const searchProductAPI = (searchValue: string) => {
  return axiosClient
    .get(`product?q=${searchValue}`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const mostProductSearchedAPI = () => {
  return axiosClient
    .get(`product?_page=1&_limit=10`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getSearchKeywordAPI = () => {
  return axiosClient
    .get(`search-keyword`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getProductSaleAPI = () => {
  return axiosClient
    .get(`product?discount=true`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getNewProductsAPI = () => {
  return axiosClient
    .get(`product?_limit=4`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getBestSellerProductsAPI = () => {
  return axiosClient
    .get(`product?bestSeller=true&_limit=4`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const toggleLikeProductAPI = ({
  id,
  favorite,
}: {
  id: string;
  favorite: boolean;
}) => {
  const body = { favorite };
  return axiosClient
    .patch(`product/${id}`, body)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getBrandAPI = () => {
  return axiosClient
    .get(`brand`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getFilterProductAPI = ({
  discount = false,
  brand,
}: {
  discount: boolean;
  brand: string[];
}) => {
  const newParams = {
    brand: brand,
  };
  const filterParams = queryString.stringify(newParams);
  console.log(filterParams);

  return axiosClient
    .get(`product?discount=${discount}&${filterParams}`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getDetailProductAPI = (id?: string) => {
  console.log(id);
  return axiosClient
    .get(`product/${id}`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getSimilarProductAPI = (brand?: string) => {
  return axiosClient
    .get(`product?brand=${brand}`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getProductAPI = () => {
  return axiosClient
    .get("product?_sort=name")
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getProductCatAPI = (category: string) => {
  return axiosClient
    .get(`product?categoryId=${category}`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getColorAPI = () => {
  return axiosClient
    .get("colors")
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};
