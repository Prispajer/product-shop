import { axiosInstance } from "../../../lib/axios";
import type { Product } from "../types/Product";

export async function getProducts(
  limit?: number,
  skip?: number
): Promise<Product[]> {
  try {
    const params = new URLSearchParams();
    if (limit !== undefined) params.append("limit", String(limit));
    if (skip !== undefined) params.append("skip", String(skip));
    const response = await axiosInstance.get<{ products: Product[] }>(
      `/products?${params.toString()}`
    );
    return response.data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function getProductsBySearch(query: string): Promise<Product[]> {
  try {
    const params = new URLSearchParams({ q: query });
    const response = await axiosInstance.get<{ products: Product[] }>(
      `/products/search?${params.toString()}`
    );
    return response.data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
