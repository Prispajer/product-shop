import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/productsApi";
import type { Product } from "../types/Product";

export default function useAllProducts() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return {
    products,
    isLoading,
    isError,
  };
}
