import { SignUpBody } from "../types/RequestBody";
import axiosClient from "./api.service";

export const signUp = (data: SignUpBody) => {
  console.log(data);
  const body = {
    id: 2,
    ...data,
  };
  console.log(body);

  return axiosClient
    .post("/users", body)
    .then((res) => {
      console.log(res);

      return res;
    })
    .catch((err) => err);
};
