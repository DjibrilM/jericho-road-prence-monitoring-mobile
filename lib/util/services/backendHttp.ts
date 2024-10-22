import axios from "axios";
import { backendBaseUrl } from "../constant";
import { CurrentAccount } from "../types";

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

export const getAgents = async () => {
  try {
    const { data } = await instance.get<CurrentAccount[]>(
      "http://localhost:3001/user/find/all"
    );

    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};
