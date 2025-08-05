import ProductListView from "./features/products/components/ProductListView/ProductListView";
import useDebounce from "./hooks/useDebounce";
import { useSearch } from "./hooks/useSearch";
import AppLayout from "./layout/AppLayout/AppLayout";

export default function App() {
  const { searchText } = useSearch();
  const searchQuery = useDebounce(searchText, 1000);
  const hasSearchQuery = searchQuery.trim().length > 0;

  return (
    <AppLayout>
      {hasSearchQuery ? (
        <ProductListView
          limit={0}
          skip={0}
          title="Search Results"
          searchQuery={searchQuery}
        />
      ) : (
        <>
          <ProductListView
            limit={6}
            skip={0}
            title="Featured Products"
            searchQuery=""
          />
          <ProductListView
            limit={6}
            skip={6}
            title="New Arrivals"
            searchQuery=""
          />
        </>
      )}
    </AppLayout>
  );
}
