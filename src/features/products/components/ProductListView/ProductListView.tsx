import List from "../../../../components/ui/List/List";
import Message from "../../../../components/ui/Message/Message";
import useProducts from "../../hooks/useProducts";
import useSearchProducts from "../../hooks/useSearchProducts";

export default function ProductListView({
  title,
  limit,
  skip,
  searchQuery,
}: {
  title: string;
  limit: number;
  skip: number;
  searchQuery: string;
}) {
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

  const hasSearchQuery = searchQuery.trim().length > 0;

  if (hasSearchQuery) {
    if (isSearchLoading) return <Message text="Loading search results..." />;
    if (isSearchError) return <Message text="Error loading search results" />;
    if (!searchedProducts || searchedProducts.length === 0)
      return <Message text="No products found" />;

    return <List title={title} products={searchedProducts} />;
  }

  if (isAllLoading) return <Message text="Loading products..." />;
  if (isAllError) return <Message text="Error loading products" />;
  if (!allProducts || allProducts.length === 0)
    return <Message text="No products found" />;

  return <List title={title} products={allProducts} />;
}
