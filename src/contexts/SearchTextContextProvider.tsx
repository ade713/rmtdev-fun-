import { createContext, useState } from "react";
import { useDebounce } from "../lib/hooks";

type TSearchTextContext = {
  debouncedSearchText: string;
  handleChangeSearchText: (newSearch: string) => void;
  searchText: string;
};

export const SearchTextContext = createContext<TSearchTextContext | null>(null);

export function SearchTextContextProvider({ children }: {
  children: React.ReactNode
}) {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 500);

  const handleChangeSearchText = (newSearchText: string) => {
    setSearchText(newSearchText);
  }

  return (
    <SearchTextContext.Provider value={{
      debouncedSearchText,
      handleChangeSearchText,
      searchText,
    }}>
      {children}
    </SearchTextContext.Provider>
  );
}
