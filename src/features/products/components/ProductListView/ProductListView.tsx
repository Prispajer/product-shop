import List from "../../../../components/ui/List/List";
import Message from "../../../../components/ui/Message/Message";
import useProducts from "../../hooks/useProducts";
import useSearchProducts from "../../hooks/useSearchProducts";
import { type ProductListViewProps } from "./ProductListView.types";

export default function ProductListView({
  title,
  limit,
  skip,
  searchQuery,
}: ProductListViewProps) {
  const hasSearchQuery = searchQuery.trim().length > 0;

  const {
    products: searchedProducts,
    isLoading: isSearchLoading,
    isError: isSearchError,
  } = useSearchProducts(searchQuery);

  const {
    products: allProducts,
    isLoading: isAllLoading,
    isError: isAllError,
  } = useProducts(limit, skip);

  const isLoading = hasSearchQuery ? isSearchLoading : isAllLoading;
  const isError = hasSearchQuery ? isSearchError : isAllError;
  const products = hasSearchQuery ? searchedProducts : allProducts;

  const loadingText = hasSearchQuery
    ? "Loading search results..."
    : "Loading products...";
  const errorText = hasSearchQuery
    ? "Error loading search results"
    : "Error loading products";

  if (isLoading) return <Message text={loadingText} />;
  if (isError) return <Message text={errorText} />;
  if (!products || products.length === 0)
    return <Message text="No products found" />;

  return <List title={title} products={products} />;
}
