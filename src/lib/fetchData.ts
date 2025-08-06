import { HttpMethod } from "../types/Http";
import { type RequestOptions } from "../types/Request";
import axiosInstance from "./axiosInstance";

export async function fetchData<T>({
  method = HttpMethod.GET,
  endpoint,
  params,
}: RequestOptions): Promise<T> {
  try {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) query.append(key, String(value));
    });

    const response = await axiosInstance.request<T>({
      url: `${endpoint}?${query.toString()}`,
      method,
    });

    return response.data;
  } catch (error) {
    console.error(`❌ Failed to fetch products from ${endpoint}:`, error);
    throw error;
  }
}
