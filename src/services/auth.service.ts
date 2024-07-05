import { AxiosResponse } from "axios";
import { SignUpBody } from "../types/RequestBody";
import axiosClient from "./api.service";
import { v4 as uuidv4 } from "uuid";

export const signUp = (data: SignUpBody) => {
  const body = {
    id: uuidv4(),
    ...data,
  };

  return axiosClient
    .post("users", body)
    .then((res: AxiosResponse<SignUpBody, number>) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};

export const getCurrentUserAPI = (id: string) => {
  return axiosClient
    .get(`users/${id}`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};
export const getCreditCardAPI = () => {
  return axiosClient
    .get(`credit-card`)
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};
