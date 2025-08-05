import { axiosInstance } from "../../../lib/axios";
import type { Product } from "../types/Product";
import { HttpMethod, type RequestOptions } from "./productsApi.types";

export function getProducts(limit?: number, skip?: number): Promise<Product[]> {
  return fetchProducts<{ products: Product[] }>({
    method: HttpMethod.GET,
    endpoint: "/products",
    params: { limit, skip },
  }).then((res) => res.products);
}

export function getProductsBySearch(query: string): Promise<Product[]> {
  return fetchProducts<{ products: Product[] }>({
    method: HttpMethod.GET,
    endpoint: "/products/search",
    params: { q: query },
  }).then((res) => res.products);
}

async function fetchProducts<T>({
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
