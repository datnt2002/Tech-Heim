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

// export const searchProductAPI = () => {
//   return axiosClient
//     .get("product-category")
//     .then((res) => {
//       const { data, status } = res;
//       return { data, status };
//     })
//     .catch((err) => err);
// };
