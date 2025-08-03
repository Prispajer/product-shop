import { axiosInstance } from "../../../lib/axios";
import type { Product } from "../types/Product";

export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await axiosInstance.get<Product[]>("/products");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
