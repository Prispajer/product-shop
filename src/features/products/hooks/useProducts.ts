import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productsApi";
import type { Product } from "../types/Product";

export default function useProducts(limit?: number, skip?: number) {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products", limit, skip],
    queryFn: () => getProducts(limit, skip),
    placeholderData: [],
    staleTime: 5 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return {
    products,
    isLoading,
    isError,
    error,
  };
}
