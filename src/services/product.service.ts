import axiosClient from "./api.service";

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

// export const searchProductAPI = () => {
//   return axiosClient
//     .get("product-category")
//     .then((res) => {
//       const { data, status } = res;
//       return { data, status };
//     })
//     .catch((err) => err);
// };
