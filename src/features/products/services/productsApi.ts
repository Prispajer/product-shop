import { fetchData } from "../../../lib/fetchData";
import { HttpMethod } from "../../../types/Http";
import type { Product } from "../types/Product";

export function fetchProducts(
  limit?: number,
  skip?: number
): Promise<Product[]> {
  return fetchData<{ products: Product[] }>({
    method: HttpMethod.GET,
    endpoint: "/products",
    params: { limit, skip },
  }).then((res) => res.products);
}

export function fetchProductsBySearch(query: string): Promise<Product[]> {
  return fetchData<{ products: Product[] }>({
    method: HttpMethod.GET,
    endpoint: "/products/search",
    params: { q: query },
  }).then((res) => res.products);
}
