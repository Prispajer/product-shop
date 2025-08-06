import React from "react";

type SearchContextType = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchContext = React.createContext<SearchContextType | undefined>(
  undefined
);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchText, setSearchText] = React.useState("");
  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
