import axios from "axios";
import { backendBaseUrl } from "../constant";

const instance = axios.create({
  baseURL: `${backendBaseUrl}`, // Set your base URL
  timeout: 5000, // Set your timeout//
});

export const login = async ({
  password,
  email,
}: {
  password: string;
  email: string;
}) => {
  try {
    const response = await instance.post("auth/login", {
      password,
      email,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
