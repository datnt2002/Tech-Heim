import axiosClient from "./api.service";

export const getBlogAPI = () => {
  return axiosClient
    .get("blogs")
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};
