import SearchInput from "../../../../components/ui/SearchInput/SearchInput";
import { useSearch } from "../../../../hooks/useSearch";

export default function SearchBar() {
  const { searchText, setSearchText } = useSearch();

  return (
    <SearchInput
      value={searchText}
      onChange={(event) => setSearchText(event.target.value)}
      placeholder={"Search for products"}
    />
  );
}
