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
    .then((res) => {
      const { data, status } = res;
      return { data, status };
    })
    .catch((err) => err);
};
