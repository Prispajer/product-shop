import { useQuery } from "@tanstack/react-query";

import { getProductsBySearch } from "../services/productsApi";
import type { Product } from "../types/Product";

export default function useSearchProducts(query: string) {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["search", { query }],
    queryFn: () => getProductsBySearch(query),
    enabled: query.length > 0,
    placeholderData: [],
    staleTime: 0,
    gcTime: query.length < 3 ? 0 : 1000 * 60,
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
