import axiosClient from "./api.service";

export const getBlogAPI = () => {
  console.log("checked");
  return axiosClient
    .get("blog")
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getDetailBlogAPI = (id: string) => {
  return axiosClient
    .get(`blog/${id}`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getVideoBlogAPI = () => {
  return axiosClient
    .get("videoblogs")
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getNewsBlogAPI = () => {
  return axiosClient
    .get("blog?_sort=releaseDate&_order=desc&_limit=3")
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};
